var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING
}, {timestamps: false});

var Message = db.define('Message', {
  userMessage: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {timestamps: false});

// idUser: {
//   type: Sequelize.INTEGER,
//   references: 'User',
//   referenceKey: 'idUser'
// },

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

// exports.User = User;
// exports.Message = Message;

module.exports = {
  User: User,
  Message: Message
};



// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// const dbConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'chat'
// });

// dbConnection.connect((err) => {
//   if (err) {
//     return console.log('Error connecting to Database', err);
//   } else {
//     console.log('Successful connection');
//   }
// });

// module.exports = dbConnection;