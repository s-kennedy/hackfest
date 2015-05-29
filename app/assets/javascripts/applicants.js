// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {

  $('#submit-btn').on("click", sendApplication)

  function sendApplication(event) {

    event.preventDefault();

    var applicantData = {
      applicant: {
        name: $('#name').val(),
        email: $('#email').val(),
        age: $('#age').val(),
        gender: $('#gender').val(),
        interest: $('#interest').val(),
        background: $('#background').val(),
        newsletter: $('#newsletter').val(),
      }
    };

    var request = $.post('/applicants', applicantData);
    request.done(successMessage);
    request.fail(failMessage);
  };

  function successMessage() {
    $('#success-modal').modal();
    $('input, textarea').val('');
    $('select').val('Choose one');
    $('input[type=checkbox]').prop("checked", false);
  };

  function failMessage() {
    console.log("faill!!!!")
  }

})