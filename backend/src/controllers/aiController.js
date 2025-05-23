import { aiResponse } from "../services/aiServices.js"

export const aiController = async (req, res) => {
  const code = req.body.code

  if (!code) {
    return res.status(400).send("code is required")
  }

  const response = await aiResponse(code)

  res.send(response)
}
