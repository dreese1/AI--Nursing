// AI--Nursing Predictive Timeliness Engine
// Version: v0.3.0-alpha
// Purpose: Explainable rule-based clinical trend detection


function evaluatePatientRisk(patient) {

    let riskScore = 0;
    let findings = [];


    // Respiratory assessment

    if (patient.oxygenIncrease) {
        riskScore++;
        findings.push(
            "Oxygen requirement has increased."
        );
    }

    if (patient.lowOxygenSaturation) {
        riskScore++;
        findings.push(
            "Oxygen saturation has decreased."
        );
    }

    if (patient.highRespiratoryRate) {
        riskScore++;
        findings.push(
            "Respiratory rate is elevated."
        );
    }


    // Cardiovascular assessment

    if (patient.highHeartRate) {
        riskScore++;
        findings.push(
            "Heart rate is elevated."
        );
    }

    if (patient.lowBloodPressure) {
        riskScore++;
        findings.push(
            "Blood pressure is decreased."
        );
    }


    // Laboratory trends

    if (patient.risingLactate) {
        riskScore++;
        findings.push(
            "Lactate trend is increasing."
        );
    }


    let riskLevel = "LOW";


    if (riskScore >= 4) {
        riskLevel = "HIGH";
    }
    else if (riskScore >= 2) {
        riskLevel = "MODERATE";
    }


    return {

        riskLevel: riskLevel,

        score: riskScore,

        explanation: findings

    };

}
