const Doctor = require('./../js/doctor.js');

var displayDoctors = function (medicalIssue, firstName, lastName, title, bio) { $('#showDoctors').append('<li> firstName + " " + lastName + " " + title + " " bio + " " + </li> ');
};
$(() => {
  $("#search-button").click(function() {
    var doctor = new Doctor();
    var medicalIssue = $("#user-search").val();
    $("#user-search").val("");
    doctor.getDoctors(medicalIssue, displayDoctors);
    console.log(medicalIssue);
  });
});
