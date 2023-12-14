const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './database/.env'});

app.use(express.json())
app.use(cors());

const port = process.env.PORT;
app.listen( port, () => {
    console.log(`Server listening on Port ${port}`);
})