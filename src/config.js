function GCPlotConfig() {

  this.currentProtocol = function() {
    return 'http' + (document.location.protocol === 'https:' ? 's://' : '://');
  };

  this.apiUrl = function() {
    if (window.api_host.startsWith('[')) {
      return this.currentProtocol() + 'gs-dev.gcplot.com';
    } else {
      return this.currentProtocol() + window.api_host;
    }
  };

}

export default GCPlotConfig;
