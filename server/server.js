
// const e = require('express');
// const express = require('express');
// const app = express();

// const port = 5000;

// app.get('/', (req, res) => {
//     res.send('your app is running');
// });


// const departments=
// [
//     {id:1 , name:'hr'
//     },{
// id:2, name:'it'},
// {
// id:3, name:'RD'}
// ]
// app.get('/api/departments',(req,res)=>
//     {
//         res.json(departments);
//     })

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// let emps=
// [
//     {id:1,name:"hassan",departmentId:2},
//     {id:2,name:"aly",departmentId:1},
//     {id:3,name:"hosny",departmentId:3},
//     {id:4,name:"mo7sen",departmentId:3},

// ]
// app.get('/api/department/:departmentId'.at(req,res)=>
//     {
//         let searchDepartmentId=Number(req.param.departmentId);
// let newList=emps.filter(e=>e.departments)
//     }
// )
// app.get('/api/department/:departmentId', (req, res) => {
//     let searchDepartmentId = Number(req.params.departmentId);

//     let newList = emps.filter(
//         e => e.departmentId === searchDepartmentId
//     );

//     res.json(newList);
// });

// Entry point: load settings, connect to MongoDB, then start listening.
require('dotenv').config();
 
const app = require('./src/app');
const connectDB = require('./src/config/db');
 
const PORT = process.env.PORT || 5000;
 
connectDB().then(() => {
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
});
