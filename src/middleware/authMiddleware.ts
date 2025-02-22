import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET as string;

// Middleware untuk verifikasi JWT
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Ambil token dari header

    if (!token) {
        return res.status(403).json({ message: "Access denied, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        (req as any).user = decoded; // Simpan data user di request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
