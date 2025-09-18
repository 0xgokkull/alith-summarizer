import { Agent } from "alith";

const githubDebugAgent = new Agent({
  model: "llama-3.1-8b-instant",
  apiKey: "Your-api-key",
  baseUrl: "https://api.groq.com/openai/v1",
  preamble: "You are an expert in version control systems like Git and GitHub. Analyze error messages and provide accurate solutions step by step."
});

async function suggestFix(errorMessage) {
  try {
    const suggestion = await githubDebugAgent.prompt(errorMessage);
    console.log("Suggestion:", suggestion);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example usage
const error = "error: Your local changes to the following files would be overwritten by merge: ";
await suggestFix(error);