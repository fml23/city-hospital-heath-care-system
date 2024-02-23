// script.js
$(document).ready(function () {
    // Display doctors by default
    displayDoctors();

    // Toggle between Doctors and Patients tabs
    $('#doctors-tab').click(function () {
        displayDoctors();
    });

    $('#patients-tab').click(function () {
        displayPatients();
    });

    // Add Doctor button click event
    $('#addDoctorBtn').click(function () {
        openAddDoctorModal();
    });

    // Add Patient button click event
    $('#addPatientBtn').click(function () {
        openAddPatientModal();
    });

    // Close modal event
    $('.close').click(function () {
        closeAddModal();
    });

    // Add Doctor form submit event
    $('#modal').on('submit', '#addDoctorForm', function (event) {
        event.preventDefault();
        addDoctor();
    });

    // Add Patient form submit event
    $('#modal').on('submit', '#addPatientForm', function (event) {
        event.preventDefault();
        addPatient();
    });
});

function displayDoctors() {
    // Fetch and display doctors from the server
    $.ajax({
        url: 'server.php',
        method: 'GET',
        data: { action: 'getDoctors' },
        dataType: 'json',
        success: function (data) {
            displayData(data, '#doctorsTable', 'doctors');
        }
    });
}

function displayPatients() {
    // Fetch and display patients from the server
    $.ajax({
        url: 'server.php',
        method: 'GET',
        data: { action: 'getPatients' },
        dataType: 'json',
        success: function (data) {
            displayData(data, '#patientsTable', 'patients');
        }
    });
}

function displayData(data, tableId, type) {
    // Display data in the specified table
    var tableBody = $(tableId + ' tbody');
    tableBody.empty();

    if (data.length === 0) {
        tableBody.append('<tr><td colspan="4">No ' + type + ' available</td></tr>');
    } else {
        $.each(data, function (index, entry) {
            tableBody.append(
                '<tr>' +
                '<td>' + entry.id + '</td>' +
                '<td>' + entry.name + '</td>' +
                (type === 'doctors' ? '<td>' + entry.specialization + '</td>' : '<td>' + entry.date_of_birth + '</td><td>' + entry.gender + '</td>') +
                '<td><button class="delete-btn" data-id="' + entry.id + '" data-type="' + type + '">Delete</button></td>' +
                '</tr>'
            );
        });
    }

    // Delete button click event
    $('.delete-btn').click(function () {
        var id = $(this).data('id');
        var type = $(this).data('type');
        deleteEntry(id, type);
    });
}

function openAddDoctorModal() {
    // Display modal form for adding a new doctor
    var modalContent = $('#modal .modal-content');
    modalContent.html(
        '<span class="close">&times;</span>' +
        '<h2>Add New Doctor</h2>' +
        '<form id="addDoctorForm">' +
        '<label for="doctorName">Name:</label>' +
        '<input type="text" id="doctorName" name="name" required>' +
        '<label for="specialization">Specialization:</label>' +
        '<input type="text" id="specialization" name="specialization" required>' +
        '<button type="submit">Add Doctor</button>' +
        '</form>'
    );

    // Show the modal
    $('#modal').css('display', 'block');
}

function openAddPatientModal() {
    // Display modal form for adding a new patient
    var modalContent = $('#modal .modal-content');
    modalContent.html(
        '<span class="close">&times;</span>' +
        '<h2>Add New Patient</h2>' +
        '<form id="addPatientForm">' +
        '<label for="patientName">Name:</label>' +
        '<input type="text" id="patientName" name="name" required>' +
        '<label for="dateOfBirth">Date of Birth:</label>' +
        '<input type="date" id="dateOfBirth" name="dateOfBirth" required>' +
        '<label for="gender">Gender:</label>' +
        '<select id="gender" name="gender" required>' +
        '<option value="Male">Male</option>' +
        '<option value="Female">Female</option>' +
        '</select>' +
        '<button type="submit">Add Patient</button>' +
        '</form>'
    );

    // Show the modal
    $('#modal').css('display', 'block');
}

function closeAddModal() {
    // Close the modal
    $('#modal').css('display', 'none');
}

function addDoctor() {
    // Add a new doctor to the server
    var doctorName = $('#doctorName').val();
    var specialization = $('#specialization').val();

    $.ajax({
        url: 'server.php',
        method: 'POST',
        data: {
            action: 'addDoctor',
            name: doctorName,
            specialization: specialization
        },
        success: function () {
            displayDoctors();
            closeAddModal();
        }
    });
}

function addPatient() {
    // Add a new patient to the server
    var patientName = $('#patientName').val();
    var dateOfBirth = $('#dateOfBirth').val();
    var gender = $('#gender').val();

    $.ajax({
        url: 'server.php',
        method: 'POST',
        data: {
            action: 'addPatient',
            name: patientName,
            dateOfBirth: dateOfBirth,
            gender: gender
        },
        success: function () {
            displayPatients();
            closeAddModal();
        }
    });
}

function deleteEntry(id, type) {
    // Delete a doctor or patient from the server
    $.ajax({
        url: 'server.php',
        method: 'POST',
        data: {
            action: 'deleteEntry',
            id: id,
            type: type
        },
        success: function () {
            if (type === 'doctors') {
                displayDoctors();
            } else {
                displayPatients();
            }
        }
    });
}
