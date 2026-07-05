function generateOptimizations(report, complexity) {

    const suggestions = [];

    // Nested loops
    if (report.maxLoopDepth >= 2) {
        suggestions.push({
            type: "Time",
            title: "Reduce Nested Loops",
            description:
                "Consider using hashing (unordered_map / unordered_set), sorting, or preprocessing to reduce nested iteration."
        });
    }

    // sort()
    const hasSort = report.algorithms.some(a => a.name === "sort");

    if (hasSort) {
        suggestions.push({
            type: "Algorithm",
            title: "Check Sorting Necessity",
            description:
                "If the data is already sorted or partially sorted, avoid unnecessary sorting operations."
        });
    }

    // vector
    if (report.vectors > 0) {
        suggestions.push({
            type: "Memory",
            title: "Reserve Vector Capacity",
            description:
                "If the final size is known, use vector.reserve() to avoid repeated reallocations."
        });
    }

    // map
    if (report.maps > 0) {
        suggestions.push({
            type: "Performance",
            title: "Consider unordered_map",
            description:
                "If ordering is unnecessary, unordered_map usually provides faster average lookups."
        });
    }

    // recursion
    if (report.recursion > 0) {
        suggestions.push({
            type: "Memory",
            title: "Avoid Deep Recursion",
            description:
                "Large recursion depth may increase stack usage. Consider an iterative solution."
        });
    }

    // Already efficient
    if (suggestions.length === 0) {
        suggestions.push({
            type: "General",
            title: "No Major Optimization Needed",
            description:
                "No obvious optimization opportunities were detected."
        });
    }

    return suggestions;

}

module.exports = generateOptimizations;