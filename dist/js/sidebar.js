/*!
 * Sidebar for Bootstrap 4
 * Copyright Zdeněk Papučík
 * MIT License
 */
(function($) {

  // see if navbar is used
  $(document).ready(function () {

    var el = $(this);
    var navbar  = '.navbar';
    var finder  = el.find('.wrapper');

    el.find(navbar).length > 0 ? finder.addClass('wrapper--navbar-used') : null;
    el.find(navbar + '.fixed-top').length > 0 ? finder.addClass('wrapper--navbar-fixed') : null;
  });

  // toggle sidebar
  $('#sidebar').on('click', function() {
    $('#navigation').toggleClass('sidebar--toggle');
  });

}(jQuery));
