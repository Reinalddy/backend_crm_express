import exp from "constants";
import prisma from "../config/database";

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

export const createUser = async (name: string, email: string, password: string) => {
    return await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
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