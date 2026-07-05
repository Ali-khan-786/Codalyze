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

    throw new Error("No report");

}

// ============================================
// Overall Space
// ============================================

document.getElementById("overallSpace").textContent =
report.complexity.space.overall;

// ============================================
// Data Structures Used
// ============================================

const list = document.getElementById("dataStructuresList");

list.innerHTML = "";

if(report.analysis.containers.length===0){

    list.innerHTML="<li>No data structures detected.</li>";

}

else{

    report.analysis.containers.forEach(container=>{

        list.innerHTML += `

        <li>

            <strong>${container.name}</strong>

            (${container.category})

        </li>

        `;

    });

}

// ============================================
// Memory Breakdown
// ============================================

const memoryTimeline =
document.getElementById("memoryTimeline");

memoryTimeline.innerHTML="";

report.analysis.containers.forEach(container=>{

    memoryTimeline.innerHTML+=`

    <div class="timeline-item">

        <div class="timeline-left">

            ${container.line}

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

if(report.analysis.containers.length===0){

    memoryTimeline.innerHTML=`

    <p>No dynamic data structures detected.</p>

    `;

}

// ============================================
// Assumptions
// ============================================

const assumptions =
document.getElementById("spaceAssumptions");

assumptions.innerHTML="";

if(report.analysis.containers.length===0){

    assumptions.innerHTML=`

    <li>

        Only constant auxiliary memory is assumed.

    </li>

    `;

}

else{

    report.analysis.containers.forEach(container=>{

        assumptions.innerHTML+=`

        <li>

            <strong>${container.name}</strong>

            is assumed to grow dynamically and may require

            <strong>${container.space}</strong>

            memory.

        </li>

        `;

    });

}

if(report.analysis.recursion>0){

    assumptions.innerHTML+=`

    <li>

        Recursive calls contribute additional stack memory.

    </li>

    `;

}