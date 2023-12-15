const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const config = {
    port: process.env.DB_PORT,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

const createConnection = () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(config);
        connection.connect((err) => {
            if(err) {
                reject(err);
            } else {
                console.log('connection created');
                resolve(connection);
            }
        });
    });
}

module.exports = createConnection;