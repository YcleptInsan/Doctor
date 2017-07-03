var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, firstName, lastName, title, bio) {
    $('.showDoctors').append('<p>' + '<br><h4>'+ firstName + " " + lastName + "," + title + "</h4>" + bio + "</p><br><hr>");
};
$(document).ready(function() {
  var doctor = new Doctor();
  $('#search-button').click(function() {
    $(".showDoctors" ).empty();
    var medicalIssue = $('#user-search').val();
    $('#user-search').val("");
    doctor.getDoctor(medicalIssue, displayDoctors);
  });
});
