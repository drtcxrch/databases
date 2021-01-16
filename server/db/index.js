var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

dbConnection.connect((err) => {
  if (err) {
    return console.log('Error connecting to Database', err);
  } else {
    console.log('Successful connection');
  }
});

module.exports = dbConnection;