// ============================================
// Back Button
// ============================================

const backButton = document.querySelector(".back-btn");

backButton.addEventListener("click", () => {

    window.location.href = "index.html";

});

const report = JSON.parse(localStorage.getItem("analysisReport"));

if (!report) {

    alert("No analysis report found.");

    throw new Error("No report");

}

// ============================================
// Current Performance
// ============================================

document.getElementById("currentTime").textContent =
    report.complexity.time.overall;

document.getElementById("currentSpace").textContent =
    report.complexity.space.overall;

// ============================================
// Target Performance
// ============================================

let targetTime = report.complexity.time.overall;
let targetSpace = report.complexity.space.overall;

if (report.analysis.maxLoopDepth >= 2) {

    targetTime = "O(n log n)";

}

if (report.analysis.containers.length > 0) {

    targetSpace = "O(1)";

}

document.getElementById("targetTime").textContent =
    targetTime;

document.getElementById("targetSpace").textContent =
    targetSpace;

// ============================================
// Optimization Potential
// ============================================

const card = document.getElementById("potentialCard");
const level = document.getElementById("potentialLevel");
const description = document.getElementById("potentialDescription");

card.classList.remove("high", "medium", "low");

const count = report.optimizations.length;

if (count >= 3) {

    card.classList.add("high");

    level.textContent = "High";

    description.textContent =
        "Several optimization opportunities were detected.";

}

else if (count === 2) {

    card.classList.add("medium");

    level.textContent = "Medium";

    description.textContent =
        "A few improvements can make the implementation more efficient.";

}

else {

    card.classList.add("low");

    level.textContent = "Low";

    description.textContent =
        "No major optimization opportunities were detected.";

}

// ============================================
// Suggestions
// ============================================

const container = document.getElementById("suggestionsContainer");

container.innerHTML = "";

if (count === 0) {

    container.innerHTML = `

    <div class="suggestion-card">

        <h3>No Suggestions</h3>

        <p>

            The analyzer did not detect any optimization opportunities.

        </p>

    </div>

    `;

}

else {

    report.optimizations.forEach(opt => {

        container.innerHTML += `

        <div class="suggestion-card">

            <h3>${opt.title}</h3>

            <p>${opt.description}</p>

        </div>

        `;

    });

}