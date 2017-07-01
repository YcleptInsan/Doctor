var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, firstName, lastName, title, bio) {
    $('.showDoctors').append('<li>' + '"><br><h4>'+ firstName + " " + lastName + "," + title + "</h4>" + bio + "</li><br><hr>");
};
$(document).ready(function() {
  var doctor = new Doctor();
  $('#search-button').click(function() {
    $(".showDoctors" ).empty();
    var medicalIssue = $('#issue').val();
    $('#user-search').val("");
    doctor.getDoctor(medicalIssue, displayDoctor);
  });
});
