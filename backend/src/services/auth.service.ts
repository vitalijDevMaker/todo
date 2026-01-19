import {hashPassword} from "../utils/hash.ts";
import {prisma} from "../../prisma/prisma.ts";

export const registerUser = async (name: string, email: string, password: string) => {
    const existUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existUser) {
        throw ("User already exists");
    }

    const hashedPassword = await hashPassword(password);

    return prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })
}