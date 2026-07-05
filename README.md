# 🚀 Codalyze

**Codalyze** is a web-based C++ static code analyzer that estimates **Time Complexity**, **Space Complexity**, detects **STL containers**, **STL algorithms**, **recursion**, and provides **optimization suggestions** using **Tree-sitter Abstract Syntax Trees (AST)**.

🔗 **Live Demo:** https://codalyze-two.vercel.app/

---

# 📌 Features

- 📈 Estimates overall Time Complexity
- 💾 Estimates Auxiliary Space Complexity
- 🔄 Detects loops and nested loops
- 🔁 Detects recursive functions
- 📚 Detects STL Containers
  - vector
  - map
  - unordered_map
  - set
  - unordered_set
  - queue
  - stack
  - priority_queue
- ⚡ Detects common STL Algorithms
  - sort()
  - stable_sort()
  - reverse()
  - binary_search()
  - lower_bound()
  - upper_bound()
  - nth_element()
- 📝 Generates Complexity Timeline
- 💡 Provides Optimization Suggestions
- 🎨 Clean and Interactive UI
- 🌐 Fully Deployed (Frontend + Backend)

---



# 🏗️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Parser

- Tree-sitter
- tree-sitter-cpp

## Deployment

- Frontend: Vercel
- Backend: Render

---

# 📂 Project Structure

```
Codalyze
│
├── backend
│   ├── analyzer
│   │   ├── database
│   │   ├── visitors
│   │   ├── cppAnalyzer.js
│   │   ├── complexityCalculator.js
│   │   ├── optimizationEngine.js
│   │   ├── timelineGenerator.js
│   │   └── treeWalker.js
│   │
│   ├── server.js
│   └── package.json
│
├── index.html
├── script.js
├── style.css
│
├── timeReport.html
├── timeReport.js
│
├── spaceReport.html
├── spaceReport.js
│
├── optimization.html
├── optimization.js
│
└── README.md
```

---

# ⚙️ How It Works

1. User writes or pastes C++ code.
2. Frontend sends the code to the Express backend.
3. Tree-sitter parses the source code into an Abstract Syntax Tree (AST).
4. Visitors traverse the AST to detect:
   - loops
   - recursion
   - STL containers
   - STL algorithms
   - function calls
5. Complexity Engine estimates:
   - Time Complexity
   - Space Complexity
6. Optimization Engine generates suggestions.
7. Results are returned as JSON and displayed in interactive reports.

---

# 🧠 Detection Capabilities

## Loops

- for
- while
- do-while
- nested loops

## Recursion

- Direct recursion

## STL Containers

- vector
- map
- unordered_map
- set
- unordered_set
- queue
- stack
- priority_queue

## STL Algorithms

- sort
- stable_sort
- reverse
- binary_search
- lower_bound
- upper_bound
- nth_element

---

# 📊 Example Output

## Time Complexity

```
Overall : O(n log n)

Worst Case : O(n log n)

Average Case : O(n log n)

Best Case : O(log n)
```

---

## Space Complexity

```
Overall : O(n)
```

---

## Optimization Suggestions

Example suggestions include:

- Reduce Nested Loops
- Reserve Vector Capacity
- Check Sorting Necessity
- Consider unordered_map instead of map
- Avoid Deep Recursion

---

# 🚀 Running Locally

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Codalyze.git
```

---

## Install Backend

```bash
cd backend

npm install
```

---

## Run Server

```bash
npm start
```

Server runs on

```
http://localhost:5000
```

---

## Run Frontend

Open

```
index.html
```

using Live Server or any static web server.

---

# 🌐 Deployment

## Frontend

Hosted on **Vercel**

## Backend

Hosted on **Render**

---

# 🎯 Current Capabilities

Codalyze is designed to accurately analyze many common competitive programming and interview-style C++ programs.

It currently focuses on:

- Loop analysis
- Nested loops
- STL algorithm detection
- STL container detection
- Recursive functions
- Basic complexity estimation

---

# 🔮 Future Improvements

- Support for Graph algorithms
- Dynamic Programming detection
- Greedy algorithm recognition
- Binary Search pattern detection
- DFS/BFS recognition
- Segment Tree detection
- Fenwick Tree detection
- Better recursion depth estimation
- Multi-file project support
- Additional programming languages

---

# 🤝 Contributing

Contributions are welcome.

If you find bugs or have ideas for improvements, feel free to open an Issue or submit a Pull Request.

---

# 👨‍💻 Author

**Ali Khan**

GitHub:

https://github.com/Ali-khan-786

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.
