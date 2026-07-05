const algorithms = require("../database/algorithms");

function algorithmVisitor(node, report, depth) {

    const func = node.childForFieldName("function");

    if (!func) return;

    const name = func.text;

    if (algorithms[name]) {

        report.algorithms.push({

            name,

            line: func.startPosition.row + 1,

            category: algorithms[name].category,

            time: algorithms[name].time,

            space: algorithms[name].space,

            loopDepth: depth

        });

    }

}

module.exports = algorithmVisitor;