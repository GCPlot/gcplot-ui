
function GCPlotCore() {
}

GCPlotCore.TOKEN = "token";

GCPlotCore.INTERNAL_ERROR_HANDLER = function(status) {
  alert(status);
}

GCPlotCore.login = function(username, password, callback, errCallback) {
  $.get(GCPlotCore.url("/user/login?login=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password)),
      GCPlotCore.dataHandler(function(data) {
        var r = JSON.parse(data);
        if (r.hasOwnProperty('error')) {
          errCallback(r.error, r.message);
        } else {
          var res = r.result;
          GCPlotCore.setToken(res.token);
          callback();
        }
      }));
}

GCPlotCore.changePasswordMail = function(email, callback, errorCallback) {
  var msg = { email: email };
  $.ajax({
    type: "POST",
    url: GCPlotCore.url("/user/send/new_password"),
    data: JSON.stringify(msg),
    contentType: "application/json",
    success: function(data) {
      var r = JSON.parse(data);
      if (r.hasOwnProperty('error')) {
        errorCallback(r.error, r.message);
      } else {
        callback();
      }
    }
  });
}

/*
* userData -> {
*   username, first_name, last_name, password, email
* }
*/
GCPlotCore.register = function(userData, callback, errorCallback) {
  $.ajax({
    type: "POST",
    url: GCPlotCore.url("/user/register"),
    data: JSON.stringify(userData),
    contentType: "application/json",
    success: function(data) {
      var r = JSON.parse(data);
      if (r.hasOwnProperty('error')) {
        errorCallback(r.error, r.message);
      } else {
        GCPlotCore.login(userData.username, userData.password, function() {
          callback();
        }, function(code, msg) {
          errorCallback(code, msg);
        });
      }
    }
  });
}

GCPlotCore.currentProtocol = function() {
  return 'http' + (document.location.protocol === 'https:' ? 's://' : '://');
};

GCPlotCore.url = function(path) {
  return GCPlotCore.currentProtocol() + GCPlotCore.apiHost() + path;
}

GCPlotCore.landingHost = function() {
  var url = window.location.hostname;
  if (!(typeof location.port === undefined || location.port == "" || location.port == 0 || location.port == "0")) {
    url += ":" + location.port;
  }
  return url;
}

GCPlotCore.appUrl = function() {
  return GCPlotCore.currentProtocol() + GCPlotCore.landingHost() + "/app";
}

GCPlotCore.apiHost = function() {
  return GCPlotCore.landingHost() + "/rest"
}

GCPlotCore.setToken = function(token) {
  localStorage.setItem(GCPlotCore.TOKEN, token);
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

GCPlotCore.split = function(input) {
  var splitBy = " ";
  var fullSplit = input.split(splitBy);
  var retVal = [];
  retVal.push( fullSplit.shift() );
  retVal.push( fullSplit.join( splitBy ) );
  return retVal;
}
