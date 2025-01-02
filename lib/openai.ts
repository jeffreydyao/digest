import { OpenAI as OpenAIClient } from "openai";

// API key is read from process.env['OPENAI_API_KEY'].
const openai = new OpenAIClient();

export default openai;
