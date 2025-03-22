const patients = [
    {
  id: 1,
  name: "Steve",
  disease: "flu",
  age: 45,
  blood: "o+ve",
  doctor:"Jhon"
},
{
    id: 2,
    name: "smith",
    disease: "cold",
    age: 29,
    blood: "ab+ve",
    doctor: "mike",

},
{
    id:3,
    name: "paul",
    disease: "diabetes",
    age: 34,
    blood: "o-ve",
    doctor: "rexx"
},
];
const getAllPatients = () => patients;

const getPatientsByDisease = (disease) => {
  return patients.filter((patient) => patient.disease.toLowerCase() === disease.toLowerCase());
};

module.exports = { getAllPatients, getPatientsByDisease };