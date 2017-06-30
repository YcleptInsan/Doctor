const apiKey = require('./../.env').apiKey;
const Doctor = require('./../js/doctor.js');
$(document).ready(function() {
  $("#search-button").click(function() {
    var medicalIssue = $("#user-search").val();
    $("user-search").val("");
    console.log(medicalIssue);
  });
    var doctor = new Doctor();
    doctor.getDoctors(medicalIssue);
  });
