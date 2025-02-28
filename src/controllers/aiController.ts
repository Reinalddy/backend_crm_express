import OpenAI from "openai";
import { Request, Response } from "express";
import { getUserByToken } from "../services/userService";

export const askAi = async (req: Request, res: Response) => {
    try {
        // CHECK IS HEADER USERTOKEN EXIST
        if(!req.header("usertoken")) {
            res.json({
                status: 400,
                message : "who area you ?",
                data : null,
            });
        }

        // CHECK IS USER EXIST
        const user = await getUserByToken(req.header("usertoken") as string);
        if(!user) {
            res.json({
                status: 400,
                message : "who area you ?",
                data : null,
            });
        }

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