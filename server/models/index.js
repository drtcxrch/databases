var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      const query = 'SELECT m.id, m.userMessage, m.roomname, u.username FROM messages m LEFT OUTER JOIN users u ON (m.idUser = u.id) ORDER BY m.id DESC;';
      db.query(query, (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (body, callback) {
      const query = 'INSERT INTO messages (userMessage, idUser, roomname) VALUES (?,(SELECT id FROM users WHERE username = ? LIMIT 1), ?)';
      db.query(query, body, (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    }
  }, // a function which can be used to insert a message into the database

  users: {
    // Ditto as above.
    get: function (callback) {
      const query = 'SELECT * FROM users;';
      db.query(query, (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (username, callback) {
      const query = 'INSERT INTO users (username) VALUES (?);';
      db.query(query, username, (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    }
  }
};


// possible messages.post method

// db.query(`INSERT INTO rooms (room_name) VALUES (${object.roomname});`, function (error, results, fields) {
//   if (error) {
//     throw error;
//   } else {
//     roomId = results.insertId;
//     db.query(`INSERT INTO messages (user_message, idUser, id_rooms)
//     VALUES (${object.message}, u.id WHERE u.username = ${object.username}, ${roomId});`, function (error, results, fields) {
//       if (error) {
//         throw error;
//       }
//     });
//   }
// });
// a function which can be used to insert a message into the database