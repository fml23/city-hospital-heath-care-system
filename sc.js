function scheduleAppointment() {
    var patientName = $('#patientName').val();
    var selectedDoctor = $('#doctor').val();
    var appointmentDate = $('#appointmentDate').val();
    var appointmentTime = $('#appointmentTime').val();
    var errorMessage = '';

    // Simple form validation
    if (!patientName || !selectedDoctor || !appointmentDate || !appointmentTime) {
        errorMessage = 'Please fill out all fields.';
    }

    if (errorMessage) {
        $('#errorMessage').text(errorMessage);
        $('#confirmationMessage').text('');
    } else {
        $('#errorMessage').text('');
        var confirmationMessage = `Appointment scheduled for ${patientName} with ${selectedDoctor} on ${appointmentDate} at ${appointmentTime}.`;
        $('#confirmationMessage').text(confirmationMessage);
    }
}
