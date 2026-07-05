function walkTree(node, report, visitors, depth = 0) {

    if (!node) return;

    if (visitors[node.type]) {
        visitors[node.type](node, report, depth);
    }

    let nextDepth = depth;

    if (
        node.type === "for_statement" ||
        node.type === "while_statement" ||
        node.type === "do_statement"
    ) {
        nextDepth++;
    }

    for (const child of node.namedChildren) {
        walkTree(child, report, visitors, nextDepth);
    }
}

module.exports = walkTree;