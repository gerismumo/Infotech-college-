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

const createConnection = async() => {
    const connection = mysql.createConnection(config);
    try {
        await new Promise((resolve, reject) => {
            connection.connect((err) => {
                if(err) {
                    reject(err);
                }else {
                    resolve();
                }
            });
        });
        console.log('connection created');
    } catch(error) {

    }
}

module.exports = {createConnection};