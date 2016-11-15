/*jshint -W109 */

import $ from 'jquery';
var jsonpipe = require('jsonpipe');

function GCPlotCore() {
}

GCPlotCore.ANONYMOUS_ANALYSE_ID = "7acada7b-e109-4d11-ac01-b3521d9d58c3";

GCPlotCore.TOKEN_KEY = "token";
GCPlotCore.USER_INFO = "user_info";
GCPlotCore.ANALYSES = "analyses";

GCPlotCore.INTERNAL_ERROR_HANDLER = function(status) {
  alert(status);
}

$(window).on('beforeunload', function() {
  sessionStorage.removeItem(GCPlotCore.USER_INFO);
  sessionStorage.removeItem(GCPlotCore.ANALYSES);
});

GCPlotCore.PROFILE_CHANGED_EVENT = "profile.changed.event";
GCPlotCore.ANALYSES_CHANGED_EVENT = "analyses.changed.event";

GCPlotCore.ERRORS = {
  '1': 'Undefined error',
  '291': 'Not authorized',
  '292': 'Account not confirmed',
  '293': 'Request rejected by internal rules',
  '294': 'Wrong credentials',
  '500': 'Internal error',
  '295': 'Not unique fields',
  '296': 'User is blocked',
  '403': 'Access denied',
  '404': 'Not found',
  '405': 'Same passwords',
  '407': 'Resource wasn\'t found',
  '513': 'Unknown GC analyse',
  '514': 'Unknown JVM Id',
  '769': 'Invalid request param'
};

GCPlotCore.YOUNG_GEN = 1;
GCPlotCore.TENURED_GEN = 2;
GCPlotCore.PERM_GEN = 3;
GCPlotCore.METASPACE_GEN = 4;
GCPlotCore.OLD_GEN = 5;
GCPlotCore.OTHER_GEN = 6;

GCPlotCore.on = function(event, handler) {
  $(document).on(event, handler);
}

GCPlotCore.off = function(event, handler) {
  $(document).off(event, handler);
}

GCPlotCore.trigger = function(event) {
  $(document).trigger(event);
}

GCPlotCore.currentProtocol = function() {
  return 'http' + (document.location.protocol === 'https:' ? 's://' : '://');
};

GCPlotCore.apiUrl = function() {
  if (window.api_host.startsWith('[')) {
    return this.currentProtocol() + 'gs-dev.gcplot.com';
  } else {
    return this.currentProtocol() + window.api_host;
  }
};

GCPlotCore.getToken = function() {
  return localStorage.getItem(GCPlotCore.TOKEN_KEY);
}

GCPlotCore.setToken = function(token) {
  localStorage.setItem(GCPlotCore.TOKEN_KEY, token);
}

GCPlotCore.userInfo = function(callback) {
  var userInfoJson = sessionStorage.getItem(GCPlotCore.USER_INFO);
  if ((typeof userInfoJson != "undefined") && userInfoJson != null) {
    return callback(JSON.parse(userInfoJson));
  } else {
    $.get(GCPlotCore.authUrl("/user/info"), GCPlotCore.dataHandler(function(data) {
      var r = JSON.parse(data);
      if (!r.hasOwnProperty('error')) {
        sessionStorage.setItem(GCPlotCore.USER_INFO, JSON.stringify(r.result));
        callback(r.result);
      } else {
        console.log("User Info fetch: " + data);
      }
    }));
  }
}

GCPlotCore.login = function(username, password, callback, errorCallback) {
  $.get(GCPlotCore.url("/user/login?login=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password)),
      GCPlotCore.dataHandler(function(data) {
        var r = JSON.parse(data);
        if (r.hasOwnProperty('error')) {
          errorCallback(r.error, GCPlotCore.ERRORS[r.error], r.message);
        } else {
          var res = r.result;
          GCPlotCore.setToken(res.token);
          sessionStorage.setItem(GCPlotCore.USER_INFO, JSON.stringify(r.result));
          callback();
        }
      }));
};

/*
* userData -> {
*   username, first_name, last_name, password, email
* }
*/
GCPlotCore.register = function(userData, callback, errorCallback) {
  console.log("registering " + JSON.stringify(userData));
  $.ajax({
    type: "POST",
    url: GCPlotCore.url("/user/register"),
    data: JSON.stringify(userData),
    contentType: "application/json",
    success: function(data) {
      var r = JSON.parse(data);
      console.log("register response " + data);
      if (r.hasOwnProperty('error')) {
        errorCallback(r.error, GCPlotCore.ERRORS[r.error], r.message);
      } else {
        GCPlotCore.login(userData.username, userData.password, function() {
          console.log("login after register successful");
          callback();
        }, function(code, title, msg) {
          errorCallback(code, title, msg);
        });
      }
    }
  });
}

GCPlotCore.logoff = function() {
  localStorage.removeItem(GCPlotCore.TOKEN_KEY);
  sessionStorage.removeItem(GCPlotCore.USER_INFO);
  sessionStorage.removeItem(GCPlotCore.ANALYSES);
}

GCPlotCore.analyses = function(callback, errorCallback) {
  var analysesJson = sessionStorage.getItem(GCPlotCore.ANALYSES);
  if ((typeof analysesJson != "undefined") && analysesJson != null) {
    return callback(JSON.parse(analysesJson));
  } else {
    $.get(GCPlotCore.authUrl("/analyse/all"), GCPlotCore.dataHandler(function(data) {
      var r = JSON.parse(data);
      if (r.hasOwnProperty('error')) {
        errorCallback(r.error, GCPlotCore.ERRORS[r.error], r.message);
      } else {
        try {
          for (var i = 0; i < r.result.analyses.length; i++) {
            var jvms = r.result.analyses[i].jvm_ids || [];
            var namesByJvm = r.result.analyses[i].jvm_names || {};

            var jvmByName = {};
            var namesArr = [];
            var sortedJvms = [];
            for (var j = 0; j < jvms.length; j++) {
              var name = namesByJvm[jvms[j]] || jvms[j];
              name += jvms[j];
              jvmByName[name] = jvms[j];
              namesArr.push(name);
            }
            namesArr.sort();
            for (var j = 0; j < namesArr.length; j++) {
              sortedJvms.push(jvmByName[namesArr[j]]);
            }
            r.result.analyses[i].jvm_ids = sortedJvms;
          }
        } catch(ex) {
          console.log(ex);
        }
        sessionStorage.setItem(GCPlotCore.ANALYSES, JSON.stringify(r.result));
        callback(r.result);
      }
    }));
  }
}

GCPlotCore.updateAnalyseBulk = function(msg, callback, errorCallback) {
  GCPlotCore.updateAnalyse(msg, callback, errorCallback, "/analyse/jvm/update/bulk");
}

GCPlotCore.updateAnalyse = function(msg, callback, errorCallback, url) {
  $.ajax({
    type: "POST",
    url: GCPlotCore.authUrl(url || "/analyse/update"),
    data: JSON.stringify(msg),
    contentType: "application/json",
    success: function(data) {
      var r = JSON.parse(data);
      if (r.hasOwnProperty('error')) {
        errorCallback(r.error, GCPlotCore.ERRORS[r.error], r.message);
      } else {
        sessionStorage.removeItem(GCPlotCore.ANALYSES);
        GCPlotCore.trigger(GCPlotCore.ANALYSES_CHANGED_EVENT);
        callback();
      }
    }
  });
}

GCPlotCore.addAnalyse = function(req, callback, errorCallback) {
  $.ajax({
    type: "POST",
    url: GCPlotCore.authUrl("/analyse/new"),
    data: JSON.stringify(req),
    contentType: "application/json",
    success: function(data) {
      var r = JSON.parse(data);
      console.log("add analyse response " + data);
      if (r.hasOwnProperty('error')) {
        errorCallback(r.error, GCPlotCore.ERRORS[r.error], r.message);
      } else {
        sessionStorage.removeItem(GCPlotCore.ANALYSES);
        GCPlotCore.trigger(GCPlotCore.ANALYSES_CHANGED_EVENT);
        callback();
      }
    }
  });
}

GCPlotCore.deleteAnalyse = function(id, callback, errorCallback) {
  $.ajax({
    type: "DELETE",
    url: GCPlotCore.authUrl("/analyse/delete?id=" + id),
    success: function(data) {
      var r = JSON.parse(data);
      console.log("delete analyse response " + data);
      if (r.hasOwnProperty('error')) {
        errorCallback(r.error, GCPlotCore.ERRORS[r.error], r.message);
      } else {
        sessionStorage.removeItem(GCPlotCore.ANALYSES);
        GCPlotCore.trigger(GCPlotCore.ANALYSES_CHANGED_EVENT);
        callback();
      }
    }
  });
}

GCPlotCore.deleteJvm = function(analyseId, jvmId, callback, errorCallback) {
  $.ajax({
    type: "DELETE",
    url: GCPlotCore.authUrl("/analyse/jvm/delete?analyse_id=" + analyseId + "&jvm_id=" + jvmId),
    success: function(data) {
      var r = JSON.parse(data);
      if (r.hasOwnProperty('error')) {
        errorCallback(r.error, GCPlotCore.ERRORS[r.error], r.message);
      } else {
        sessionStorage.removeItem(GCPlotCore.ANALYSES);
        GCPlotCore.trigger(GCPlotCore.ANALYSES_CHANGED_EVENT);
        callback();
      }
    }
  });
}

GCPlotCore.lazyGCEvents = function(data, callback, errorCallback, completeCallback) {
  jsonpipe.flow(GCPlotCore.authUrl("/gc/jvm/events/full/sample/stream") + "&" +
    "analyse_id" + "=" + data.analyse_id + "&" + "jvm_id" + "=" + encodeURIComponent(data.jvm_id) +
     "&" + "tz" + "=" + encodeURIComponent(data.tz || "") + "&" + "from" + "=" + data.from + "&" + "to" + "=" + data.to +
     "&delimit=true", {
        "delimiter": "$d",
        "success": function(data) {
          callback(data);
        },
        "error": function(errorMsg) {
          console.error(errorMsg);
          errorCallback(errorMsg);
        },
        "complete": function(statusText) {
          if (completeCallback) {
            completeCallback(statusText);
          }
        },
        timeout: 180000,
        "method": "GET",
        "withCredentials": false
    });
}

GCPlotCore.objectsAges = function(analyseId, jvmId, callback, errorCallback) {
  $.ajax({
    type: "GET",
    url: GCPlotCore.authUrl("/jvm/gc/ages/last?analyse_id=" + analyseId + "&jvm_id=" + jvmId),
    success: function(data) {
      var r = JSON.parse(data);
      if (r.hasOwnProperty('error')) {
        errorCallback(r.error, GCPlotCore.ERRORS[r.error], r.message);
      } else {
        callback(r.result);
      }
    }
  });
}

GCPlotCore.humanFileSize = function(bytes, si) {
    var thresh = si ? 1000 : 1024;
    if(Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = si
        ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
        : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while(Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(3)+' '+units[u];
}

GCPlotCore.url = function(path) {
  return GCPlotCore.apiUrl() + path;
}

GCPlotCore.authUrl = function(path) {
  var url = GCPlotCore.url(path);
  if (path.indexOf('?') > 0) {
    url += '&token=' + GCPlotCore.getToken();
  } else {
    url += '?token=' + GCPlotCore.getToken();
  }
  return url;
}

GCPlotCore.dataHandler = function(dataHandler) {
  return function(data, status) {
    if (status != 'success') {
      GCPlotCore.INTERNAL_ERROR_HANDLER(status);
    } else {
      dataHandler(data);
    }
  };
}

GCPlotCore.isLoggedIn = function() {
  var token = GCPlotCore.getToken();
  return (typeof token != "undefined") && token != null;
};

GCPlotCore.rstr = function(length) {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

GCPlotCore.defaultProps = {
};

export default GCPlotCore;
