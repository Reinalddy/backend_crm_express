import exp from "constants";
import prisma from "../config/database";
import { generateRandomString } from "../helpers/helpers";

export const allUsers = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    });
};

export const getUserById = async (id: number) => {
    return await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    });
};

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    });
}

export const getUserBytoken = async (token: string) => {
    return await prisma.user.findUnique({
        where: {
            token: token
        },
        select : {
            id: true,
            name:true,
            token:true
        }
    });
}

export const createUser = async (name: string, email: string, password: string) => {
    const token = generateRandomString(10);
    return await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password,
            token: token
        }
    });
};

export const updateUser = async (id: number, name: string, email: string, password: string) => {
    return await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: name,
            email: email,
            password: password
        }
    });
};

export const deleteUser = async (id: number) => {
    return await prisma.user.delete({
        where: {
            id: id
        }
    });
};