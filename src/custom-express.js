const express = require('express');
const app = expresse();

const rotas = require('./router');
rotas(app);

module.exports = app;
