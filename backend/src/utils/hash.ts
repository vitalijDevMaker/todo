import bcrypt from "bcrypt";

const SALT = 10
export const hashPassword = async (password: string) => {
    return bcrypt.hashSync(password, SALT);
}

export const comparePassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}