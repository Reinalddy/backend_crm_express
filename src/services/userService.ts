import * as UserModel from "../models/user";

export const allUsers = async () => {
    return await UserModel.allUsers();
}

export const getUserById = async (id: number) => {
    return await UserModel.getUserById(id);
}

export const getUserByEmail = async (email: string) => {
    return await UserModel.getUserByEmail(email);
}

export const createUser = async (name: string, email: string, password: string) => {
    return await UserModel.createUser(name, email, password);
}

export const updateUser = async (id: number, name: string, email: string, password: string) => {
    return await UserModel.updateUser(id, name, email, password);
}

export const deleteUser = async (id: number) => {
    return await UserModel.deleteUser(id);
}

