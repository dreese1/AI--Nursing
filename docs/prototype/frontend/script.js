function showPatient(patientName) {

    const details = document.getElementById("patient-details");


    if (patientName === "Patient A") {

        details.innerHTML = `
            <h2>Patient A - Room 101</h2>
            <h3>Why Am I Seeing This?</h3>
            <h3>Clinical Timeline</h3>

<ul>
    <li>08:00 — Initial assessment completed</li>
    <li>10:00 — Vital signs remained stable</li>
    <li>12:00 — Routine care continued</li>
    <li>14:00 — No significant changes identified</li>
</ul>

<p>
No significant concerning trends identified. Current findings support routine monitoring.
</p>

            <h3>Status: Stable</h3>

            <h3>Vital Signs</h3>
            <ul>
                <li>Heart Rate: 78 bpm</li>
                <li>Blood Pressure: 122/76 mmHg</li>
                <li>Respiratory Rate: 16/min</li>
                <li>Oxygen Saturation: 98%</li>
                <li>Temperature: 98.6°F</li>
            </ul>

            <h3>Laboratory Trends</h3>
            <ul>
                <li>WBC: 7.2</li>
                <li>Creatinine: 0.9</li>
                <li>Lactate: 1.1</li>
            </ul>

            <h3>Clinical Priorities</h3>
            <h3>Why Am I Seeing This?</h3>

<p>
Respiratory concern identified because oxygen requirement is increasing,
oxygen saturation has decreased, and respiratory rate is elevated.
</p>
            <ul>
                <li>Continue routine monitoring</li>
                <li>Maintain current care plan</li>
            </ul>
            <h3>Why Am I Seeing This?</h3>

<p>
No significant concerning trends identified. Current findings support routine monitoring.
</p>
        `;


    } else if (patientName === "Patient B") {

        details.innerHTML = `
            <h2>Patient B - Room 102</h2>

            <h3>Status: Monitor Closely</h3>

            <h3>Vital Signs</h3>
            <ul>
                <li>Heart Rate: 104 bpm</li>
                <li>Blood Pressure: 108/68 mmHg</li>
                <li>Respiratory Rate: 24/min</li>
                <li>Oxygen Saturation: 92%</li>
                <li>Temperature: 99.8°F</li>
            </ul>

            <h3>Laboratory Trends</h3>
            <ul>
                <li>WBC: 12.4</li>
                <li>Creatinine: 1.3</li>
                <li>Lactate: 2.2</li>
            </ul>

            <h3>Clinical Priorities</h3>
            <ul>
                <li>Monitor respiratory status</li>
                <li>Reassess oxygen requirements</li>
                <li>Review trends</li>
            </ul>
            <h3>Why Am I Seeing This?</h3>
            <h3>Clinical Timeline</h3>

<ul>
    <li>08:00 — Initial assessment completed</li>
    <li>10:15 — Oxygen requirement increased from 2L to 4L</li>
    <li>11:30 — Oxygen saturation trend decreased</li>
    <li>12:00 — Respiratory reassessment completed</li>
    <li>13:00 — Care plan reviewed</li>
</ul>

<p>
Respiratory concern identified because oxygen requirement is increasing,
oxygen saturation has decreased, and respiratory rate is elevated.
</p>
        `;


    } else if (patientName === "Patient C") {

        details.innerHTML = `
            <h2>Patient C - Room 103</h2>
            <h3>Why Am I Seeing This?</h3>

<p>
Higher risk pattern identified because multiple changes are occurring together:
increased heart rate, decreased blood pressure, increased respiratory rate,
and rising lactate.
</p>

            <h3>Status: Concerning Trend</h3>

            <h3>Vital Signs</h3>
            <ul>
                <li>Heart Rate: 118 bpm</li>
                <li>Blood Pressure: 92/58 mmHg</li>
                <li>Respiratory Rate: 30/min</li>
                <li>Oxygen Saturation: 88%</li>
                <li>Temperature: 101.4°F</li>
            </ul>

            <h3>Laboratory Trends</h3>
            <ul>
                <li>WBC: 18.6</li>
                <li>Creatinine: 1.8</li>
                <li>Lactate: 4.0</li>
            </ul>

            <h3>Clinical Priorities</h3>
            <ul>
                <li>Evaluate deterioration risk</li>
                <li>Assess oxygenation</li>
                <li>Consider provider notification</li>
            </ul>
            <h3>Why Am I Seeing This?</h3>
            <h3>Clinical Timeline</h3>

<ul>
    <li>08:00 — Initial assessment completed</li>
    <li>09:45 — Heart rate trend increased</li>
    <li>10:30 — Blood pressure decreased</li>
    <li>11:15 — Laboratory abnormalities identified</li>
    <li>12:00 — Provider communication initiated</li>
</ul>

<p>
Higher risk pattern identified because multiple changes are occurring together:
increased heart rate, decreased blood pressure, increased respiratory rate,
and rising lactate.
</p>
        `;

    }

}
