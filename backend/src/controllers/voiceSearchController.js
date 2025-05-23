import { Voice } from "../models/voiceSearchModels.js"

export const voiceSearch = async(req, res) => {
    const query = req.query.search

    const results = Voice.find(
        {
            $or: [
                {
                    //TODO: $reex
                    title: {$regex: query, $options: 'i'}
                },
                {
                    description: {$regex: query, $options: 'i'}
                }
            ]
        }
    )
    res.json(results)
}