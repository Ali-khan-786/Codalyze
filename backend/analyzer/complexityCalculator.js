function calculateComplexity(report) {

    const time = {
        overall: "O(1)",
        best: "O(1)",
        average: "O(1)",
        worst: "O(1)",
        contributors: [],
        assumptions: []
    };

    const space = {
        overall: "O(1)",
        contributors: []
    };

    let polynomialPower = report.maxLoopDepth;
    let hasLog = false;

    // Analyze algorithms
    for (const algo of report.algorithms) {

        time.contributors.push(algo.name);

        if (algo.time.includes("log n")) {

            hasLog = true;

        }

        // sort() contributes an additional n factor because it is O(n log n)
        if (algo.time.startsWith("O(n")) {

            polynomialPower += algo.loopDepth;

        }

    }

    // Build Big-O string
    if (polynomialPower === 0 && !hasLog) {

        time.overall = "O(1)";

    }

    else {

        let result = "O(";

        if (polynomialPower === 1) {

            result += "n";

        }

        else if (polynomialPower > 1) {

            result += `n^${polynomialPower}`;

        }

        if (hasLog) {

            if (polynomialPower > 0) result += " ";

            result += "log n";

        }

        result += ")";

        time.overall = result;
        time.best = result;
        time.average = result;
        time.worst = result;

    }

    // Space
    if (report.containers.length) {

        space.overall = "O(n)";

        for (const container of report.containers) {

            space.contributors.push(container.name);

        }

    }

    return {

        time,

        space

    };

}

module.exports = calculateComplexity;