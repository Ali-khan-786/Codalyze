// ============================================
// Back Button
// ============================================

const backButton = document.querySelector(".back-btn");

backButton.addEventListener("click", () => {

    window.location.href = "index.html";

});
// ============================================
// Fill Estimated Complexity
// ============================================

document.getElementById("overallComplexity").textContent =
analysisReport.overall;

document.getElementById("worstCase").textContent =
analysisReport.worst;

document.getElementById("averageCase").textContent =
analysisReport.average;

document.getElementById("bestCase").textContent =
analysisReport.best;


// ============================================
// Fill Summary
// ============================================

document.getElementById("loopsDetected").textContent =
analysisReport.loops;

document.getElementById("nestedLoops").textContent =
analysisReport.nestedLoops;

document.getElementById("recursiveCalls").textContent =
analysisReport.recursiveCalls;

document.getElementById("functionCalls").textContent =
analysisReport.functionCalls;

document.getElementById("constantOps").textContent =
analysisReport.constantOperations;


// ============================================
// Future Integration
// ============================================

/*

Later this file will receive the report from the backend.

Example:

fetch("/analyze")

↓

Receive JSON

↓

Update this page dynamically

No HTML changes required.

*/