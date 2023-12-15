const express = require('express');
const routes = express.Router();
const counties  = require('../data/counties');


routes.get('/counties', (req, res) => {
    try {
        res.json({success: true, data: counties});
    }catch (error) {
        res.json({success: false, error: error.message});
    }
});

module.exports = routes;