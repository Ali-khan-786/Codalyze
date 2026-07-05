const algorithms = {

    sort: {
        time: "O(n log n)",
        space: "O(log n)",
        category: "Sorting"
    },

    stable_sort: {
        time: "O(n log n)",
        space: "O(n)",
        category: "Sorting"
    },

    reverse: {
        time: "O(n)",
        space: "O(1)",
        category: "Array"
    },

    binary_search: {
        time: "O(log n)",
        space: "O(1)",
        category: "Searching"
    },

    lower_bound: {
        time: "O(log n)",
        space: "O(1)",
        category: "Searching"
    },

    upper_bound: {
        time: "O(log n)",
        space: "O(1)",
        category: "Searching"
    },

    nth_element: {
        time: "Average O(n)",
        space: "O(log n)",
        category: "Selection"
    }

};

module.exports = algorithms;