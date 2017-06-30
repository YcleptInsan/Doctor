var Doctor = require('./../js/doctor.js');

var displayDoctors = function (medicalIssue, firstName, lastName, title, bio) { $('#showDoctors').append('<li> + firstName + " " + lastName + " " + title + " " bio + " " + <br> </li>');
};
$(() => {

  var doctor = new Doctor();

  $("#search-button").click(function() {
    $("#showDoctors").empty();
    var medicalIssue = $("#user-search").val();
    $("#user-search").val("");
    doctor.getDoctors(medicalIssue, displayDoctors);
  });
});
