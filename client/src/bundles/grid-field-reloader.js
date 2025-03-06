import $ from 'jquery';

$.entwine('ss', function ($) {
  /**
   * I dont know much about entwine.
   * This forces the gridfield to reload when using dex
   */
  $('.cms form[action^="admin/dex-custom-reporting/"] .grid-field:not([cms-loading-ignore-url-params])').entwine({
    showDetailView: function (url, event) {
      if (url.includes('admin/dex-custom-reporting/')) {
        window.location.href = url;
      }
    }
  });
});
