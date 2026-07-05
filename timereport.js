// ============================================
// Back Button
// ============================================

const backButton = document.querySelector(".back-btn");

backButton.addEventListener("click", () => {

    window.location.href = "index.html";

});


const report = JSON.parse(localStorage.getItem("analysisReport"));

if (report) {

    // Estimated Complexity

    document.getElementById("overallComplexity").textContent =
        report.complexity.time.overall;

    document.getElementById("bestCase").textContent =
        report.complexity.time.best;

    document.getElementById("averageCase").textContent =
        report.complexity.time.average;

    document.getElementById("worstCase").textContent =
        report.complexity.time.worst;

    // Summary

    document.getElementById("loopCount").textContent =
        report.analysis.loops;

    document.getElementById("nestedLoops").textContent =
        report.analysis.maxLoopDepth;

    document.getElementById("recursiveCalls").textContent =
        report.analysis.recursion;

    document.getElementById("functionCalls").textContent =
        report.analysis.functionCalls.length;

}
const timelineContainer =
    document.getElementById("timelineContainer");

timelineContainer.innerHTML = "";

report.timeline.forEach(item => {

    timelineContainer.innerHTML += `

    <div class="timeline-item">

        <div class="timeline-left">

            ${item.line}

        </div>

        <div class="timeline-right">

            <h3>${item.title}</h3>

            <p>

                Complexity

                <strong>${item.complexity}</strong>

            </p>

        </div>

    </div>

    `;

});