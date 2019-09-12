/*!
 * Sidebar menu for Bootstrap 4
 * Copyright Zdeněk Papučík
 * MIT License
 */
(function($) {

  // toggle sidebar menu
  $('#sidebar').on('click', function() {
    $('#navigation').toggleClass('sidebar--toggle');
  });

}(jQuery));
