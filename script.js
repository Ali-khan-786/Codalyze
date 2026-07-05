const codeEditor = document.getElementById("codeEditor");
const lineNumbers = document.getElementById("lineNumbers");
const savedCode = localStorage.getItem("sourceCode");

if (savedCode !== null) {
    codeEditor.value = savedCode;
}

const analyzeBtn = document.getElementById("analyzeBtn");
const newCodeBtn = document.getElementById("newCodeBtn");
const reportSection = document.getElementById("reportSection");

const statusIndicator = document.getElementById("statusIndicator");
const timeReport = document.getElementById("timeReport");

const spaceReport = document.getElementById("spaceReport");

const optimizationReport = document.getElementById("optimizationReport");


function updateLineNumbers() {

    const lines = codeEditor.value.split("\n").length;

    let numbers = "";

    for (let i = 1; i <= lines; i++) {

        numbers += i + "<br>";

    }

    lineNumbers.innerHTML = numbers;

}



function setStatus(type, text) {

    statusIndicator.classList.remove(
        "ready",
        "analyzing",
        "completed"
    );

    statusIndicator.classList.add(type);

    statusIndicator.innerHTML =
        `<span class="dot"></span>${text}`;

}



codeEditor.addEventListener("input", () => {

    updateLineNumbers();

    if (codeEditor.value.trim().length > 0) {

        analyzeBtn.disabled = false;

        analyzeBtn.classList.add("enabled");

    }

    else {

        analyzeBtn.disabled = true;

        analyzeBtn.classList.remove("enabled");

        reportSection.classList.add("hidden");

    }

    setStatus("ready", "Ready");

});



codeEditor.addEventListener("scroll", () => {

    lineNumbers.scrollTop = codeEditor.scrollTop;

});



codeEditor.addEventListener("keydown", function (e) {

    if (e.key === "Tab") {

        e.preventDefault();

        const start = this.selectionStart;
        const end = this.selectionEnd;

        this.value =
            this.value.substring(0, start) +
            "    " +
            this.value.substring(end);

        this.selectionStart =
        this.selectionEnd =
            start + 4;

        updateLineNumbers();

    }

});



analyzeBtn.addEventListener("click", async () => {

    setStatus("analyzing","Analyzing...");

    analyzeBtn.disabled = true;

    analyzeBtn.classList.remove("enabled");

    const code = codeEditor.value;

    const language = document.getElementById("language").value;
    localStorage.setItem("sourceCode", code);
    try{

        const response = await fetch("http://127.0.0.1:5000/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                language,
                code
            })
        });        

        const data = await response.json();

        console.log(data);
        // Save report for all report pages
        localStorage.setItem(
            "analysisReport",
            JSON.stringify(data)
        );
        setStatus("completed","Completed");

        reportSection.classList.remove("hidden");

        analyzeBtn.disabled=false;

        analyzeBtn.classList.add("enabled");

        analyzeBtn.textContent="Analyze Again";

        newCodeBtn.classList.remove("hidden");

    }

    catch(error){

        console.error(error);

        alert(error.message);

         setStatus("ready","Ready");

}

});



updateLineNumbers();

// ============================================
// Navigation
// ============================================

timeReport.addEventListener("click", () => {

    window.location.href = "timeReport.html";

});

spaceReport.addEventListener("click", () => {

    window.location.href = "spaceReport.html";

});

optimizationReport.addEventListener("click", () => {

    window.location.href = "optimization.html";

});


newCodeBtn.addEventListener("click", () => {

    // Remove saved data
    localStorage.removeItem("sourceCode");
    localStorage.removeItem("analysisReport");

    // Clear editor
    codeEditor.value = "";
    updateLineNumbers();

    // Hide reports
    reportSection.classList.add("hidden");

    // Reset buttons
    analyzeBtn.textContent = "Analyze";
    analyzeBtn.disabled = true;
    analyzeBtn.classList.remove("enabled");

    newCodeBtn.classList.add("hidden");

    // Ready state
    setStatus("ready", "Ready");

});