var db = require('../db/index');
var User = db.User;
var Message = db.Message;


module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({ include: [User] })
        .complete((err, results) => {
          if (err) {
            console.log(err);
          } else {
            res.json(results);
          }
        });
    },
    post: function (req, res) {
      User.findOrCreate({ username: req.body.username })
        .complete((err, user) => {
          let data = {
            userMessage: req.body.message,
            idUser: req.body.username,
            roomname: req.body.roomname
          };
          Message.create(data)
            .complete((err, results) => {
              res.sendStatus(201);
            });
        });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      User.findAll()
        .complete((err, results) => {
          if (err) {
            console.log(err);
          } else {
            res.json(results);
          }
        });
    },
    post: function (req, res) {
      User.create({ username: req.body.username })
        .complete((err, user) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.sendStatus(201);
          }
        });
    }
  }
};

// var models = require('../models');

// module.exports = {
//   messages: {
//     get: function (req, res) {
//       models.messages.get((err, results) => {
//         if (err) {
//           res.status(400).send(err);
//         } else {
//           res.json(results);
//         }
//       });
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       let data = [req.body.message, req.body.username, req.body.roomname];
//       models.messages.post(data, (err, results) => {
//         if (err) {
//           console.log(err);
//           res.status(400).send(err);
//         } else {
//           res.status(200).send(results);
//         }
//       });
//     } // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       models.users.get((err, results) => {
//         if (err) {
//           res.status(400).send(err);
//         } else {
//           res.json(results);
//         }
//       });
//     },
//     post: function (req, res) {
//       models.users.post(req.body.username, (err, results) => {
//         if (err) {
//           res.status(400).send(err);
//         } else {
//           res.sendStatus(201);
//         }
//       });
//     }
//   }
// };