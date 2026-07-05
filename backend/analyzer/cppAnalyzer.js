const Parser = require("tree-sitter");
const Cpp = require("tree-sitter-cpp");
const generateOptimizations = require("./optimizationEngine");
const generateTimeline = require("./timelineGenerator");
const containerVisitor = require("./visitors/containerVisitor");
const algorithmVisitor = require("./visitors/algorithmVisitor");
const calculateComplexity=require("./complexityCalculator");
const {
    functionDefinitionVisitor,
    functionCallVisitor
} = require("./visitors/functionVisitor");
const walkTree = require("./treeWalker");

function analyzeCpp(code) {

    const parser = new Parser();

    parser.setLanguage(Cpp);

    const tree = parser.parse(code);

    const report = {

        loops: 0,
        maxLoopDepth: 0,
        loopLines: [],
        recursion: 0,
        currentFunction: null,
        functionDefinitions: [],
        functionCalls: [],
        containers: [],
        algorithms: [],
        vectors: 0,
        maps: 0,
        unorderedMaps: 0,

        sets: 0,
        unorderedSets: 0,

        queues: 0,
        stacks: 0,
        priorityQueues: 0

    };

    const visitors = {

        for_statement(node, report, depth) {

            report.loops++;
            report.loopLines.push(node.startPosition.row + 1);
            report.maxLoopDepth = Math.max(report.maxLoopDepth, depth + 1);

        },

        while_statement(node, report, depth) {

            report.loops++;
            report.loopLines.push(node.startPosition.row + 1);
            report.maxLoopDepth = Math.max(report.maxLoopDepth, depth + 1);

        },

        do_statement(node, report, depth) {

            report.loops++;
            report.loopLines.push(node.startPosition.row + 1);
            report.maxLoopDepth = Math.max(report.maxLoopDepth, depth + 1);

        },

        function_definition(node, report) {

            report.currentFunction =functionDefinitionVisitor(node, report);

        },        
        type_identifier(node, report,depth) {
            containerVisitor(node, report,depth);
        },
        call_expression(node, report,depth) {
            functionCallVisitor(node, report);
            algorithmVisitor(node, report,depth);
        },

    };    

    walkTree(tree.rootNode, report, visitors);
    const complexity=calculateComplexity(report);
    const timeline = generateTimeline(report);
    const optimizations = generateOptimizations(report, complexity);
    return{
        analysis:report,
        complexity,
        timeline,
        optimizations
    };

}

module.exports = analyzeCpp;