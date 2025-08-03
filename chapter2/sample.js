const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input_prompt("プロンプトを入力してください: ");

function input_prompt(msg) {
  rl.question(msg, (inputText) => {
    rl.close();
    access_openai(inputText);
  });
}

// OpenAIを使わないダミー関数
async function access_openai(prompt_value) {
  try {
    // ここにOpenAIの代わりに返すダミー応答を記述
    const result = dummyResponse(prompt_value);
    console.log("AIの応答:", result);
  } catch (error) {
    console.error("エラー:", error);
  }
}

function dummyResponse(input) {
  // 入力に応じて適当な応答を返す
  if (input.includes("こんにちは")) {
    return "こんにちは！今日はどんなことを話しましょうか？";
  } else {
    return "これはダミーの応答です（APIキーなし）";
  }
}
