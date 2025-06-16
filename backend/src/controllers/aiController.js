import { aiResponse } from "../services/aiServices.js"

export const personalAssistantController = async (req, res) => {
  const userMessage = req.body.message

  if (!userMessage) {
    return res.status(400).send("Prompt is required")
  }

  const geminiResponse = await aiResponse(code)

  res.send(geminiResponse); 
}