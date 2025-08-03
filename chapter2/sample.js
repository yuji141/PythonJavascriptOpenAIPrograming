// v4以降用のコード（推奨）
const readline = require('readline');
const OpenAI = require('openai');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const api_key = ""; // ここに実際のAPIキーを入れる

const openai = new OpenAI({
  apiKey: api_key
});

input_prompt("");

function input_prompt(msg) {
  rl.question(msg, (inputText) => {
    rl.close();
    access_openai(inputText);
  });
}

async function access_openai(prompt_value) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // 最新モデルに変更（text-davinci-003は非推奨）
      messages: [{ role: "user", content: prompt_value }],
      max_tokens: 100
    });

    const result = response.choices[0].message.content.trim();
    console.log(result);
  } catch (error) {
    console.error("Error accessing OpenAI:", error);
  }
}
