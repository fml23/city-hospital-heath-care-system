function scheduleAppointment() {
    var childName = $('#childName').val();
    var selectedDoctor = $('#doctor').val();
    var appointmentDate = $('#appointmentDate').val();
    var appointmentTime = $('#appointmentTime').val();
    var errorMessage = '';

    // Simple form validation
    if (!childName || !selectedDoctor || !appointmentDate || !appointmentTime) {
        errorMessage = 'Please fill out all fields.';
    }

    if (errorMessage) {
        $('#errorMessage').text(errorMessage);
        $('#confirmationMessage').text('');
    } else {
        $('#errorMessage').text('');
        var confirmationMessage = `Appointment scheduled for ${childName} with ${selectedDoctor} on ${appointmentDate} at ${appointmentTime}.`;
        $('#confirmationMessage').text(confirmationMessage);
    }
}
