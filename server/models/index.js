var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages;', function (error, results, fields) {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (body, callback) {
      db.query('INSERT INTO messages (user_message, roomname) VALUES (?, ?)', body, function (error, results, fields) {
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
      db.query('SELECT username FROM users;', function (error, results, fields) {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (username, callback) {
      db.query('INSERT INTO users (username) VALUES (?);', username, function (error, results, fields) {
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
//     db.query(`INSERT INTO messages (user_message, id_users, id_rooms)
//     VALUES (${object.message}, u.id WHERE u.username = ${object.username}, ${roomId});`, function (error, results, fields) {
//       if (error) {
//         throw error;
//       }
//     });
//   }
// });
// a function which can be used to insert a message into the database