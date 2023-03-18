const { Configuration, OpenAIApi } = require("openai");
const { prompt } = require("prompt-sync")();

require("dotenv").config();

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});

const open_ai = new OpenAIApi(configuration);

const chat_gpt_question = prompt("How can I help you today?");

async function run_completion() {
	let question = chat_gpt_question();

	const completion = await open_ai.createCompletion({
		model: "text-davinci-003",
		prompt: question
	});

	console.log(completion.data.choices[0].text);
}

run_completion().then(r => false);
