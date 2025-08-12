const api_key = ''; // APIキーなし

function doAction() {
  const value = document.querySelector('#prompt').value;
  access_openai(value);
}

function setQnA(question, result) {
  document.querySelector('#question').textContent = question;
  document.querySelector('#result').textContent = result;
}

function access_openai(prompt) {
  // 実際のAPI呼び出しをコメントアウト
  /*
  fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + api_key,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100,
    }),
  })
    .then((response) => response.json())
    .then((json_data) => {
      const result = json_data.choices[0].text.trim();
      setQnA(prompt, result);
    });
  */

  // ダミー回答を直接返す
  const dummyResult = "（これはダミーの回答です）あなたの質問は受け取りました。";
  setQnA(prompt, dummyResult);
}
