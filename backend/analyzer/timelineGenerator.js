function generateTimeline(report) {

    const timeline = [];

    // Loops
    if (report.loops > 0) {

        timeline.push({

            line: "-",

            title: `${report.loops} Loop(s) Detected`,

            complexity:
                report.maxLoopDepth === 1
                    ? "O(n)"
                    : `O(n^${report.maxLoopDepth})`

        });

    }

    // STL Algorithms
    for (const algo of report.algorithms) {

        timeline.push({

            line: algo.line,

            title: algo.name,

            complexity: algo.time

        });

    }

    // Containers
    for (const container of report.containers) {

        timeline.push({

            line: container.line,

            title: container.name,

            complexity: container.space

        });

    }

    return timeline;

}

module.exports = generateTimeline;