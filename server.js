const express = require("express");
const { getAllPatients, getPatientsByDisease } = require("./Patients");

const app = express();
const PORT = 7878;

app.get("/patients", (req, res) => {
    const { disease } = req.query;

    if (disease) {
        const filteredPatients = getPatientsByDisease(disease);
        return res.json(filteredPatients.length ? filteredPatients : { message: "No patients found" });
    }

    res.json(getAllPatients());
});

app.get("/patients/:disease", (req, res) => {
    const { disease } = req.params;
    const filteredPatients = getPatientsByDisease(disease);
    res.json(filteredPatients.length ? filteredPatients : { message: "No patients found" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
