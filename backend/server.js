const express=require('express');
const cors = require('cors');
const app = express();
const db=require('./db');
const userroute=require('./routes/userRoutes.js');
const medicineroute=require('./routes/medicineRoutes.js');
const bodyParser=require('body-parser');
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();
const PORT=process.env.PORT||3000;
app.use('/user',userroute)
app.use('/medicine',medicineroute)

app.listen(3000,()=>{
    console.log('connected to server 3000');
});