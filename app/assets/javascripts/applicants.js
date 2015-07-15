// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {

  $('#register-form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
      errorMessage();
    };
  });

})

