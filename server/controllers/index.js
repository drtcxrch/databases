var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let data = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(data, (err, results) => {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, (err, results) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  }
};

