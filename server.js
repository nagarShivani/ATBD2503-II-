const express = require('express');
const app = express();
const port = 4200;
//dummy data
const employees = require('./employees');
//middleware
app.use(express.json());
//default route
app.get('/',(req, res)=>{
    res.send('Employee API is running!');
});
//api
app.get('/api/employees',(req, res) => {
    try{
        //throw new Error('error');
        res.status(200).json(employees);
    }catch (error){
        console.error('Error retrieving employees data:',error);
        res.status(500).json({message:'Internal server Error'});
    }
});
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);

});