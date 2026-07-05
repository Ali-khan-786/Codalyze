const analyzeCpp = require("./analyzer/cppAnalyzer");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post("/analyze", (req, res) => {

    console.log("Request Received!");

    const code = req.body.code;
 
    console.log("======================");
    console.log(code);
    console.log("======================");
    const report = analyzeCpp(code);
    console.dir(report, { depth: null });
    res.json(report);

});

app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});