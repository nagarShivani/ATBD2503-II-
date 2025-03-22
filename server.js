
const express = require("express");
const { getAllPatients, getPatientsByDisease } = require("./patients");

const app = express();
const PORT = 4400;
//route for testing api is working or not
app.get("/", (req, res) => {
    res.send("Welcome to the Patient API!");
  });
  

// Route to get all patients
app.get("/patients", (req, res) => {
  res.json(getAllPatients());
});

// Retrieve patients based on disease using Query String (e.g., /patients/filter?disease=Cold)
app.get("/patients/filter", (req, res) => {
  const { disease } = req.query;
  if (!disease) {
    return res.status(400).json({ error: "Disease query parameter is required" });
  }
  const filteredPatients = getPatientsByDisease(disease);
  res.json(filteredPatients);
});

// Retrieve patients based on disease using URL Parameter (e.g., /patients/disease/Cold)
app.get("/patients/disease/:disease", (req, res) => {
  const { disease } = req.params;
  const filteredPatients = getPatientsByDisease(disease);
  res.json(filteredPatients);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
