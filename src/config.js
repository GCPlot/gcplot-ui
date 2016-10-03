function GCPlotConfig() {

  this.apiUrl = function() {
    if (GCPlotConfig.prototype.API_HOST.startsWith('{')) {
      return GCPlotConfig.prototype.PROTOCOL + 'gs-dev.gcplot.com';
    } else {
      return GCPlotConfig.prototype.PROTOCOL + GCPlotConfig.prototype.API_HOST;
    }
  };

}

GCPlotConfig.prototype.PROTOCOL = 'http' + (document.location.protocol === 'https:' ? 's://' : '://');
GCPlotConfig.prototype.API_HOST = '{{ api_host }}';

export default GCPlotConfig;
