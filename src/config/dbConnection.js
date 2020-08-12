const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '178.128.146.252',
    user: 'admin_sigmause',
    password: 'pfaDKIJyPF',
    database: "admin_sigmatest"
  })
}