import OpenAI from "openai";

// openai configuration
export const openai = new OpenAI({
  apiKey: process.env.VITE_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
