// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {

  $('#register-form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
      errorMessage();
    }; // else {
      // e.preventDefault();
      // $('#regform').trigger('submit.rails')
    // }
  });

  // $("#regform").on('ajax:success', function() {
  //   console.log("ajax succes what??");
  //   successMessage();
  // });

  // $('#regform').on('ajax:failure', errorMessage);

  // $('#submit-btn').on("click", sendApplication);

  // function sendApplication() {
  //   console.log("application sending!")

  //   var applicantData = {
  //     applicant: {
  //       name: $('#name').val(),
  //       email: $('#email').val(),
  //       age: $('#age').val(),
  //       gender: $('#gender').val(),
  //       interest: $('#interest').val(),
  //       background: $('#background').val(),
  //       newsletter: $('#newsletter').val()
  //     }
  //   };

  //   $.ajax({
  //     method: "POST",
  //     url: "/applicants",
  //     data: applicantData,
  //     dataType: "json",
  //     beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').last().attr('content'))},
  //     success: successMessage,
  //     error: errorMessage
  //   });

  // };

  // function successMessage(res) {
  //   console.log(res);
  //   $('#success-modal').modal();
  //   $('input, textarea').val('');
  //   $('select').val('Choose one');
  // };

  // function errorMessage(err) {
  //   console.log(err);
  //   $('#error-modal').modal();
  // }

})

