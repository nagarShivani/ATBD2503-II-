const patients = [ 
    { id: 1, name: "Aman", age: 30, disease: "Cold", info: "Mild symptoms" },
    { id: 2, name: "Bobby", age: 45, disease: "Flu", info: "High fever" },
    { id: 3, name: "Chandu", age: 50, disease: "Diabetes", info: "Requires insulin" },
    { id: 4, name: "Daroga", age: 25, disease: "Cold", info: "Cough and sneezing" },
    { id: 5, name: "Shiva", age: 38, disease: "Flu", info: "Body pain and weakness" }
];

const getAllPatients = () => patients;

const getPatientsByDisease = (disease) => patients.filter(p => p.disease.toLowerCase() === disease.toLowerCase());

module.exports = { getAllPatients, getPatientsByDisease };