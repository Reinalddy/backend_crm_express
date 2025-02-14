import { Request, Response, NextFunction } from "express";
import * as UserService from "../services/userService";

export const getAllUsers = async (req: Request, res: Response) : Promise<Response> => {
    try {
        const users = await UserService.allUsers();
        if(!users) {
            return res.json({
                status: 404,
                data: null,
                message: "User not found"
            })
        }

        return res.json({
            status: 200,
            data: users,
            message: "Get ALl users successfully"
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            status: 500,
            message: "Internal server error",
        })
        
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const user = await UserService.getUserById(id);
    
        if(!user) {
            res.status(404).json({
                data : null,
                message: "User not found"
            })
        }
    
        res.json({
            status: 200,
            data: user,
            message: "Get user by id successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal server error",
        })
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body;
        const user = await UserService.createUser(name, email, password);
        res.json({
            status: 200,
            data: user,
            message: "Create user successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal server error",
        })
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const {name, email, password} = req.body;
        const user = await UserService.updateUser(id, name, email, password);
        res.json({
            status: 200,
            data: user,
            message: "Update user successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal server error",
        })
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const user = await UserService.deleteUser(id);
        res.json({
            status: 200,
            data: user,
            message: "Delete user successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal server error",
        })
    }
};