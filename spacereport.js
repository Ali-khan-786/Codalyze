// ============================================
// Back Button
// ============================================

const backButton = document.querySelector(".back-btn");

backButton.addEventListener("click", () => {

    window.location.href = "index.html";

});

const report = JSON.parse(localStorage.getItem("analysisReport"));

if(report){

    document.getElementById("overallSpace").textContent =
        report.complexity.space.overall;

    document.getElementById("vectorCount").textContent =
        report.analysis.vectors;

    document.getElementById("mapCount").textContent =
        report.analysis.maps;

    document.getElementById("unorderedMapCount").textContent =
        report.analysis.unorderedMaps;

    document.getElementById("queueCount").textContent =
        report.analysis.queues;

    document.getElementById("stackCount").textContent =
        report.analysis.stacks;

    document.getElementById("priorityQueueCount").textContent =
        report.analysis.priorityQueues;

}
const memoryTimeline = document.getElementById("memoryTimeline");

memoryTimeline.innerHTML = "";

report.analysis.containers.forEach(container => {

    memoryTimeline.innerHTML += `

    <div class="timeline-item">

        <div class="timeline-left">

            Line ${container.line}

        </div>

        <div class="timeline-right">

            <h3>${container.name}</h3>

            <p>

                ${container.category}

                <strong>${container.space}</strong>

            </p>

        </div>

    </div>

    `;

});
const major = document.getElementById("majorContributors");

major.innerHTML = "";

report.analysis.containers.forEach(container => {

    major.innerHTML +=

        `<li>${container.name}</li>`;

});
const minor = document.getElementById("minorContributors");

minor.innerHTML = `

<li>Local Variables</li>

<li>Function Parameters</li>

`;
const assumptions = document.getElementById("spaceAssumptions");

assumptions.innerHTML = "";

report.analysis.containers.forEach(container => {

    assumptions.innerHTML += `

    <li>

        <strong>${container.name}</strong>

        assumed to grow dynamically.

    </li>

    `;

});

if(report.analysis.recursion>0){

    assumptions.innerHTML += `

    <li>

        Recursive calls contribute stack memory.

    </li>

    `;

}