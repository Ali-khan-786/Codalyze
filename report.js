// ============================================
// Back Button
// ============================================

const backButton = document.querySelector(".back-btn");

backButton.addEventListener("click", () => {

    window.location.href = "index.html";

});


// ============================================
// Dummy Analysis Data
// (Later this will come from the backend)
// ============================================

const analysisReport = {

    overall: "O(n²)",

    worst: "O(n²)",

    average: "O(n²)",

    best: "O(n)",

    loops: 2,

    nestedLoops: 1,

    recursiveCalls: 0,

    functionCalls: 3,

    constantOperations: 18,

    timeline: [

        {

            line: "Line 5",

            title: "for(int i=0;i<n;i++)",

            complexity: "O(n)"

        },

        {

            line: "Line 11",

            title: "Nested for Loop",

            complexity: "O(n²)"

        },

        {

            line: "Final",

            title: "Estimated Complexity",

            complexity: "O(n²)"

        }

    ],

    contributors: {

        major: [

            "Nested Loop",

            "Linear Traversal"

        ],

        minor: [

            "if Statement",

            "Variable Assignment"

        ],

        ignored: [

            "cout",

            "return",

            "Comments"

        ]

    },

    assumptions: [

        "unordered_map lookup considered Average O(1)",

        "sort() considered O(n log n)",

        "vector::push_back() considered Amortized O(1)"

    ]

};


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