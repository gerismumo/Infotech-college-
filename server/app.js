const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './database/.env'});


const corsOptions = {
    origin: 'http://infotech.tsidn.org',
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
}
app.use(cors(corsOptions));
app.use(express.json());


const createConnection = require('./database/db');

const port = process.env.PORT;
const routes = require('./routes/routes');
app.use('/api', routes);
const startServer = async () => {
    // await createConnection();
    app.listen( port, () => {
        console.log(`Server listening on Port ${port}`);
    })
}
startServer();
