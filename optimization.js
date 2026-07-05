const backButton=document.querySelector(".back-btn");

backButton.addEventListener("click",()=>{

    window.location.href="index.html";

});

const report=JSON.parse(localStorage.getItem("analysisReport"));

if(!report) throw new Error("No Report Found");

document.getElementById("currentTime").textContent=
report.complexity.time.overall;

document.getElementById("currentSpace").textContent=
report.complexity.space.overall;

// Simple estimation

let targetTime=report.complexity.time.overall;

let targetSpace=report.complexity.space.overall;

if(report.analysis.maxLoopDepth>=2){

    targetTime="O(n log n)";

}

if(report.analysis.containers.length){

    targetSpace="O(1)";

}

document.getElementById("targetTime").textContent=
targetTime;

document.getElementById("targetSpace").textContent=
targetSpace;

// Potential

const card=document.getElementById("potentialCard");

const level=document.getElementById("potentialLevel");

const desc=document.getElementById("potentialDescription");

if(report.optimizations.length>=3){

    card.classList.add("high");

    level.textContent="High";

    desc.textContent=
    "Several optimizations can significantly improve the implementation.";

}
else if(report.optimizations.length==2){

    card.classList.add("medium");

    level.textContent="Medium";

    desc.textContent=
    "Some useful optimizations were detected.";

}
else{

    card.classList.add("low");

    level.textContent="Low";

    desc.textContent=
    "Only minor optimizations are available.";

}

// Suggestions

const container=document.getElementById("suggestionsContainer");

container.innerHTML="";

report.optimizations.forEach(opt=>{

    container.innerHTML+=`

    <div class="suggestion-card">

        <h3>${opt.title}</h3>

        <p>${opt.description}</p>

    </div>

    `;

});

