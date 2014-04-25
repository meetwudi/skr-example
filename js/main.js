$(document).ready(function() {
  var skr;
  // adjust screen size
  function adjust() {
    $('.screen').height($(window).height());
    $('.screen.yellow')[0].dataset['topTop'] = 'top: ' + $(window).height() + 'px';
    if (skr) {
      skr.refresh();
    }
  }
  adjust();
  // adjust when window resize
  $(window).resize(function() {
    adjust();
  });
  // init skrollr
  skr = skrollr.init({
    forceHeight: false
  });
});