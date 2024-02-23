$(document).ready(function() {
    // Dummy doctor credentials
    var validUsername = "doctor";
    var validPassword = "password";
  
    // Dummy patient data
    var patients = [
      { name: 'John Doe', age: 35, diagnosis: 'Flu' },
      { name: 'Jane Smith', age: 28, diagnosis: 'Common cold' },
      { name: 'Mike Johnson', age: 45, diagnosis: 'Headache' },
      { name: 'Emily Williams', age: 50, diagnosis: 'Back pain' }
    ];
  
    // Login form submission
    $('#loginForm').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
      if (username === validUsername && password === validPassword) {
        showPatientDetails();
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  
    // Function to show patient details
    function showPatientDetails() {
      $('.login-container').hide();
      $('#patientDetails').show();
      $('#patientDetails').html('<h2>Patient Details</h2>');
      patients.forEach(function(patient) {
        $('#patientDetails').append('<div class="patient">' + 
                                      '<p>Name: ' + patient.name + '</p>' +
                                      '<p>Age: ' + patient.age + '</p>' +
                                      '<p>Diagnosis: ' + patient.diagnosis + '</p>' +
                                      '<button class="makeAppointmentBtn">Make Appointment</button>' +
                                    '</div>');
      });
  
      // Add event listener to dynamically created "Make Appointment" buttons
      $('.makeAppointmentBtn').click(function() {
        // Here you can implement the logic to handle appointment scheduling
        alert("Appointment scheduled!");
      });
    }
  });
  