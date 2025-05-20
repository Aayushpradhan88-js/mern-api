import OpenAI from "openai";
import readline from "readline";

const openai = new OpenAI({
  key: process.env.OPENAI_GPT_API_KEY,
})

export async function createAssistantIfNeeded() {
  try {
    const file = await openai.files.create({
      file: fs.createReadStream("mydata.txt"),
      purpose: "assistants",
    });

    // Check if the assistant already exists
    const existingAssistants = await openai.beta.assistants.list();
    const existingAssistant = existingAssistants.data.find(
      (assistant) => assistant.name === "LegalGuide AI"
    );

    if (existingAssistant) {
      console.log("Assistant already exists:", existingAssistant);
      return existingAssistant; // Return the existing assistant if found
    }

    // If not found, create a new assistant
    const assistant = await openai.beta.assistants.create({
      name: "LegalGuide AI",
      instructions:
        "LegalGuide AI is your intelligent legal companion, designed to assist you in navigating the complex world of laws and regulations effortlessly.",
      model: "gpt-3.5-turbo",
      tools: [{ type: "code_interpreter" }],
      file_ids: [file.id],
    });

    console.log("New assistant created:", assistant);
    return assistant;
  } catch (error) {
    console.error("Error creating assistant:", error);
  }
}

createAssistantIfNeeded();
