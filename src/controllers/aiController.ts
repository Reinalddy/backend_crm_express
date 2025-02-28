import OpenAI from "openai";
import { Request, Response } from "express";

export const askAi = async (req: Request, res: Response) => {
    try {
        const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });
        const {prompt} = req.body;
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: [{"role": "user", "content": prompt}],
        });

        res.json({
            status: 200,
            message: "Ask AI successfully",
            data: response
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal server error",
            data: null
        })
    }
};