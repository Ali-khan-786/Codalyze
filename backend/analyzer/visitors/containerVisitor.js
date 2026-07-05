const containers = require("../database/containers");

function containerVisitor(node, report, depth) {

    const type = node.text;

    if (containers[type]) {

        report.containers.push({

            name: type,

            line: node.startPosition.row + 1,

            category: containers[type].category,

            space: containers[type].space,

            loopDepth: depth

        });

        switch (type) {

            case "vector":
                report.vectors++;
                break;

            case "map":
                report.maps++;
                break;

            case "unordered_map":
                report.unorderedMaps++;
                break;

            case "set":
                report.sets++;
                break;

            case "unordered_set":
                report.unorderedSets++;
                break;

            case "queue":
                report.queues++;
                break;

            case "stack":
                report.stacks++;
                break;

            case "priority_queue":
                report.priorityQueues++;
                break;

        }

    }

}

module.exports = containerVisitor;