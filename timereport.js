// ============================================
// Back Button
// ============================================

const backButton = document.querySelector(".back-btn");

backButton.addEventListener("click", () => {

    window.location.href = "index.html";

});

const report = JSON.parse(localStorage.getItem("analysisReport"));

if (!report) {

    alert("No report found.");

    throw new Error("No Report");

}

// ============================================
// Estimated Complexity
// ============================================

document.getElementById("overallComplexity").textContent =
report.complexity.time.overall;

document.getElementById("bestCase").textContent =
report.complexity.time.best;

document.getElementById("averageCase").textContent =
report.complexity.time.average;

document.getElementById("worstCase").textContent =
report.complexity.time.worst;

// ============================================
// Summary
// ============================================

document.getElementById("loopCount").textContent =
report.analysis.loops;

document.getElementById("nestedLoops").textContent =
report.analysis.maxLoopDepth;

document.getElementById("recursiveCalls").textContent =
report.analysis.recursion;

document.getElementById("functionCalls").textContent =
report.analysis.functionCalls.length;

document.getElementById("constantOps").textContent =
Math.max(
    0,
    report.analysis.functionCalls.length -
    report.analysis.algorithms.length
);

// ============================================
// Timeline
// ============================================

const timeline =
document.getElementById("timelineContainer");

timeline.innerHTML = "";

if(report.timeline.length===0){

    timeline.innerHTML =

    "<p>No time-complexity events detected.</p>";

}

else{

    report.timeline.forEach(item=>{

        timeline.innerHTML+=`

        <div class="timeline-item">

            <div class="timeline-left">

                Line ${item.line}

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

}

// ============================================
// Algorithms Used
// ============================================

const algoList =
document.getElementById("algorithmList");

algoList.innerHTML = "";

if(report.analysis.algorithms.length===0){

    algoList.innerHTML =

    "<li>No STL algorithms detected.</li>";

}

else{

    report.analysis.algorithms.forEach(algo=>{

        algoList.innerHTML +=

        `<li>

            <strong>${algo.name}</strong>

            (${algo.time})

        </li>`;

    });

}

// ============================================
// Assumptions
// ============================================

const assumptions =
document.getElementById("timeAssumptions");

assumptions.innerHTML = "";

if(report.analysis.algorithms.length===0){

    assumptions.innerHTML =

    "<li>No algorithm-specific assumptions were required.</li>";

}

else{

    report.analysis.algorithms.forEach(algo=>{

        assumptions.innerHTML +=

        `<li>

            <strong>${algo.name}</strong>

            assumed to run in

            <strong>${algo.time}</strong>.

        </li>`;

    });

}

if(report.analysis.recursion>0){

    assumptions.innerHTML +=

    `<li>

        Recursive calls are assumed to have linear depth unless otherwise inferred.

    </li>`;

}