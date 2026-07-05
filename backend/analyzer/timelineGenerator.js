function generateTimeline(report) {

    const timeline = [];

    //----------------------------------------
    // Loops
    //----------------------------------------

    if (report.loopLines && report.loopLines.length > 0) {

        report.loopLines.forEach((line, index) => {

            let complexity = "O(n)";

            if (index + 1 >= 2) {

                complexity = `O(n^${index + 1})`;

            }

            timeline.push({

                line,

                title: "Loop Detected",

                complexity

            });

        });

    }

    //----------------------------------------
    // STL Algorithms
    //----------------------------------------

    for (const algo of report.algorithms) {

        timeline.push({

            line: algo.line,

            title: algo.name,

            complexity: algo.time

        });

    }

    //----------------------------------------
    // Sort timeline by line number
    //----------------------------------------

    timeline.sort((a, b) => a.line - b.line);

    return timeline;

}

module.exports = generateTimeline;