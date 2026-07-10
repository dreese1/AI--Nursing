function showPatient(patientName) {

    const details = document.getElementById("patient-details");

    if (patientName === "Patient A") {

        details.innerHTML = `
            <h2>Patient A - Room 101</h2>
            <p><strong>Status:</strong> Stable</p>
            <p><strong>Priority:</strong> Routine monitoring</p>
            <p><strong>Focus:</strong> Continue current care plan.</p>
        `;

    } else if (patientName === "Patient B") {

        details.innerHTML = `
            <h2>Patient B - Room 102</h2>
            <p><strong>Status:</strong> Monitor Closely</p>
            <p><strong>Concern:</strong> Increasing oxygen requirement</p>
            <p><strong>Nursing Focus:</strong> Reassess respiratory status and monitor trends.</p>
        `;

    } else if (patientName === "Patient C") {

        details.innerHTML = `
            <h2>Patient C - Room 103</h2>
            <p><strong>Status:</strong> Concerning Trend</p>
            <p><strong>Concern:</strong> Changing vital signs</p>
            <p><strong>Nursing Focus:</strong> Evaluate changes and consider provider communication.</p>
        `;
    }

}
