var express = require('express');
var router = express.Router();

// ✅ OpenAI v4対応（旧 Configuration ではなく、直接クラスを使う）
const OpenAI = require("openai");

// ✅ ここに実際のAPIキーを入力、または process.env.OPENAI_API_KEY に切り替え可能
const openai = new OpenAI({
  apiKey: "", // ← 本番では.envなどに切り出すのが安全です
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { question: null, result: null });
});

// POST送信の処理
router.post('/', async function(req, res, next) {
  const prompt = req.body["prompt"];
  const result = await access_openai(prompt);
  res.render('index', {
    question: prompt,
    result: result
  });
});

// OpenAI APIアクセス
async function access_openai(prompt_value) {
  try {
    if (!openai.apiKey) {
      console.log("⚠️ APIキー未設定、ダミー返答を返します");
      return `「${prompt_value}」に対するダミーの回答です。`;
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt_value }],
      max_tokens: 100,
    });

    return response.choices[0].message.content.trim();

  } catch (err) {
    console.error("❌ OpenAIアクセス中にエラー発生:", err.message);
    return "OpenAIにアクセスできませんでした（エラー処理済み）";
  }
}



module.exports = router;
