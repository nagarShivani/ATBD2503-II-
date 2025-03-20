const express = require("express");
const employees = require("./employees");

const app = express();
const PORT = 7878;

app.get("/employees", (req, res) => {
    res.json(employees);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
