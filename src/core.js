/*jshint -W109 */

import $ from 'jquery';

function GCPlotCore() {
}

GCPlotCore.TOKEN_KEY = "token";
GCPlotCore.USER_INFO = "user_info";

GCPlotCore.INTERNAL_ERROR_HANDLER = function(status) {
  alert(status);
}

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

GCPlotCore.defaultProps = {
};

export default GCPlotCore;
