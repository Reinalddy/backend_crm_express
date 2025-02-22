import { Request, Response, NextFunction } from "express";
import * as UserService from "../services/userService";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserService.allUsers();
        if(!users) {
             res.json({
                status: 404,
                message: "User not found",
                data: null,
            })
        }

         res.json({
            status: 200,
            message: "Get ALl users successfully",
            data: users,
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            status: 500,
            data : null,
            message: "Internal server error",
        })
        
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const user = await UserService.getUserById(id);
    
        if(!user) {
            res.json({
                status: 404,
                message: "User not found",
                data: null,
            })
        }
    
        res.json({
            status: 200,
            message: "Get user by id successfully",
            data: user,
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

export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const user = await UserService.getUserByEmail(email);
        res.json({
            status: 200,
            message: "Get user by email successfully",
            data: user,
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

export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body;
        const user = await UserService.createUser(name, email, password);
        res.json({
            status: 200,
            message: "Create user successfully",
            data: user,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal server error",
            data : null
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
            message: "Update user successfully",
            data: user,
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

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const user = await UserService.deleteUser(id);
        res.json({
            status: 200,
            message: "Delete user successfully",
            data: user,
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