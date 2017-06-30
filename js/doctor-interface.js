const apiKey = require('./../.env').apiKey;
const Doctors = require('./../js/doctor.js');


$(document).ready(function() {
  $("#search-button").click(function() {
    var medicalIssue = $("#user-search").val();
    $("user-search").val("");
    exports.getDoctors = function(medicalIssue) {
      $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
      .then(function(result) {
      // $('.showDoctors').text("Here are the listed doctors in Portland, Oregon for your " + medicalIssue + " " + result.main.)
      console.log("success");
    });
      .fail(function(error){
      console.log("fail");
      });
    };
    var doctors = new Doctors();
    doctors.getDoctors();
  });
});
