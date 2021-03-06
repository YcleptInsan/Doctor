var apiKey = require('./../.env').apiKey;
//good ole empty Doc Constructor
function Doctor() {
}
  //method to get the targeted information from api
  Doctor.prototype.getDoctor = function(medicalIssue, displayDoctors) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
      console.log('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey);
      for(var i = 0; i <= response.data.length ; i++){
      if(response.data[i] !==null) {
        displayDoctors(medicalIssue,
        response.data[i].profile.first_name, response.data[i].profile.last_name, response.data[i].profile.title,
        response.data[i].profile.bio);
       }
      }
    })
    .fail(function(error){
      $(".showDoctors").text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
