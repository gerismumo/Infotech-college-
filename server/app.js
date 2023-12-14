const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './database/.env'});

app.use(express.json())
app.use(cors());

const database = require('./database/db')

const port = process.env.PORT;

const startServer = () => {
    database.createConnection();
    app.listen( port, () => {
        console.log(`Server listening on Port ${port}`);
    })
}
startServer();
