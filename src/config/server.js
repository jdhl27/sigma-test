const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Configurando aplicación
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// Middleware 
app.use(bodyParser.urlencoded({extended: false}));  // Se encarga de recibir los inputs por sus atributos 'name' 



module.exports = app;