const express = require('express');
const router = express.Router();
const app = express();
const port = 4494;
app.listen(port);
const server = app.listen(() => {
  console.log(`Server started successfully on port number ${port}`);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
