const ignoredFunctions = new Set([
    "begin",
    "end",
    "cbegin",
    "cend",
    "rbegin",
    "rend",
    "crbegin",
    "crend",
    "size",
    "empty",
    "front",
    "back",
    "push_back",
    "pop_back",
    "push",
    "pop",
    "top",
    "clear",
    "reserve",
    "resize",
    "capacity",
    "insert",
    "erase",
    "find",
    "count",
    "lower_bound",
    "upper_bound"
]);

function functionDefinitionVisitor(node, report) {

    const declarator = node.childForFieldName("declarator");

    if (!declarator) return null;

    const identifier = declarator.childForFieldName("declarator");

    if (!identifier) return null;

    const name = identifier.text;

    report.functionDefinitions.push({

        name,

        line: identifier.startPosition.row + 1

    });

    return name;

}

function functionCallVisitor(node, report) {

    const func = node.childForFieldName("function");

    if (!func) return;

    let name = func.text;

    // v.begin() -> begin
    if (name.includes(".")) {

        name = name.split(".").pop();

    }

    // ptr->begin() -> begin
    if (name.includes("->")) {

        name = name.split("->").pop();

    }

    if (ignoredFunctions.has(name)) return;

    report.functionCalls.push({

        name,

        line: func.startPosition.row + 1

    });
    if(name===report.currentFunction){
        report.recursion++
    }

}

module.exports = {

    functionDefinitionVisitor,

    functionCallVisitor

};