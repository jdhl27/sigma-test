const app = require('./config/server')

const express = require('express');
const path = require('path');

require('./app/routes/contacts')(app);

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
})