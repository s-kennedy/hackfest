// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {

  // using Froogaloop library for Vimeo's JS API
  var froogaloop = $f("vimeoplayer")
  setTimeout(function() {
    froogaloop.api('play');
  }, 4500);

});