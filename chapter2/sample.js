const readline = require('readline');
const {Configuration, OpenAIApi} = require('openai');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

const api_key = "";
const config =new Configuration({
  apiKey: api_key,
});

input_prompt("");

function input_prompt(msg) {
  rl.question(msg, (inputText) => {
    rl.close();
    access_openai(inputText);
  });
}

function access_openai(prompt_value){
      const openai= new OpenAIApi(config);
      
    openai.createCompletion({
      model: "text-davinchi-003",
      prompt: prompt_value,
      max_tokens: 100,
      }).then(response=>{
        const result = response.data.choices[0].text.trim();
        console.log(result);
      });
  }
