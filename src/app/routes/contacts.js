const dbConnection = require('../../config/dbConnection')

module.exports = app => {
  const connection = dbConnection();
  
  app.get('/', (req, res) => {
    connection.query('SELECT * FROM contacts', (err, result) => {
      console.log(result);
      res.render('contacts/contacts', {
        contacts: result
      });
    });
  });

  app.post('/contacts', (req, res) => {
    const {name, email, state, city} = req.body;

    connection.query('INSERT INTO contacts SET?', {
      name: name,
      email: email,
      state: state,
      city: city
    }, (err, result) => {
      res.redirect('/');
    });
  })
}