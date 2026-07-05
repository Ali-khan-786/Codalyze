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

    // Polynomial power from loops
    let nPower = report.maxLoopDepth;

    // Log factor
    let logPower = 0;

    //----------------------------------------
    // STL Algorithms
    //----------------------------------------

    for (const algo of report.algorithms) {

        time.contributors.push(algo.name);

        switch (algo.name) {

            case "sort":
            case "stable_sort":

                nPower += algo.loopDepth;
                logPower = Math.max(logPower,1);

                break;

            case "reverse":

                nPower = Math.max(nPower,algo.loopDepth+1);

                break;

            case "binary_search":
            case "lower_bound":
            case "upper_bound":

                logPower = Math.max(logPower,1);

                if(algo.loopDepth>0){

                    nPower=Math.max(nPower,algo.loopDepth);

                }

                break;

            case "nth_element":

                nPower=Math.max(nPower,algo.loopDepth+1);

                break;

        }

    }
    //----------------------------------------
// Recursion
//----------------------------------------

    if (report.recursion > 0 && nPower === 0) {
        // Assume linear recursion for common cases
        nPower = 1;
        time.contributors.push("Recursion");
    }    

    //----------------------------------------
    // Generate Big O
    //----------------------------------------

    let ans="O(";

    if(nPower==0 && logPower==0){

        ans+="1";

    }

    else{

        if(nPower==1){

            ans+="n";

        }

        else if(nPower>1){

            ans+=`n^${nPower}`;

        }

        if(logPower){

            if(nPower>0) ans+=" ";

            ans+="log n";

        }

    }

    ans+=")";

    time.overall=ans;
    time.best=ans;
    time.average=ans;
    time.worst=ans;

    //----------------------------------------
    // Space
    //----------------------------------------

    if(report.containers.length){

        space.overall="O(n)";

        report.containers.forEach(c=>{

            space.contributors.push(c.name);

        });

    }

    return{

        time,

        space

    };

}

module.exports=calculateComplexity;