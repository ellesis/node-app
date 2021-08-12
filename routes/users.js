const userRoutes = (app, fs) => {
  // variables
  const dataPath = './data/users.json'

  // READ
  app.get('/users', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err
      }

      res.send(JSON.parse(data))
    })
  })
}

module.exports = userRoutes

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
