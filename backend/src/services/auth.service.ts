import { comparePassword, hashPassword } from "../utils/hash.ts";
import { prisma } from "../../prisma/prisma.ts";
import jwt from "jsonwebtoken";
import appConfig from "../app.config.ts";
import bcrypt from "bcrypt";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const existUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(password);

  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Not find user");
  }

  const comparedPassword = await comparePassword(password, user.password);

  if (!comparedPassword) {
    throw new Error("wrong login or password");
  }
  console.log(appConfig.secret_token);
  const accessToken = jwt.sign({ userId: user.id }, appConfig.secret_token!, {
    expiresIn: `${appConfig.secret_token_expired}m`,
  });

  const refreshToken = jwt.sign({ userId: user.id }, appConfig.refresh_token!, {
    expiresIn: `${appConfig.refresh_token_expired}d`,
  });

  const refreshTokenHash = await bcrypt.hash(refreshToken, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: { refreshTokenHash },
  });

  return {
    accessToken,
    refreshToken,
    id: user.id,
  };
};

export const logoutUser = async (userId: string) => {
  await prisma.user.update({
    where: { id: userId },
    data: {
      refreshTokenHash: null
    }
  })
}
