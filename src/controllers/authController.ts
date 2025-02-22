import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { getUserByEmail } from "../services/userService";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY as string;

// LOGIN FUNGTION
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // CEK APAKAH USER ADA DI DATABASE  
        const user = await getUserByEmail(email);

        if(!user) {
            res.json({
                status:400,
                message: "User not found",
                data: null
            })
        }

        //Bandingkan password dengan hash yang tersimpan
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            res.json({
                status:400,
                message: "Invalid password",
                data: null
            })
        }

        // Buat token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

        res.json({
            status:200,
            message: "Login successfully",
            data: token
        })

    } catch (error) {
        console.log(error);
    }
}
