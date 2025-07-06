var express = require('express');
var router = express.Router();

const { Configuration, OpenAIApi } = require('openai');
const api_key = "";
const config = new Configuration({
  apiKey: api_key,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
