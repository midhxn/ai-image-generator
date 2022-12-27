const expresd = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app =express();

app.listen(port,()=>console.log(`server on port${port}`));