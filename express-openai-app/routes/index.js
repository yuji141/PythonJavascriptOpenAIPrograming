var express = require('express');
var router = express.Router();

const { Configuration, OpenAIApi } = require('openai');
const api_key = "";
const config = new Configuration({
  apiKey: api_key,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { question: null, result: null });
});

//POST送信の処理
router.post('/',async function(req,res,next){
  const prompt = req.body["prompt"];
  const result = await access_openai(prompt);
  res.render('index',{
    question: prompt,result:result
  });
});

// OpenAI APIアクセス
async function access_openai(prompt_value) {
  const openai = new OpenAIAPI(config);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt : prompt_value,
    max_tokens: 100,
  });
  return response.data.choices[0].text.trim();
}

module.exports = router;