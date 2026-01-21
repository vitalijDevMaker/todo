type AppConfigType = {
  secret_token: string;
  secret_token_expired: number;
  refresh_token: string;
  refresh_token_expired: number;
};

export const appConfig: AppConfigType = {
  secret_token: process.env.AUTH_JWT_SECRET!,
  secret_token_expired: +process.env.AUTH_JWT_SECRET_EXPIRED!,
  refresh_token: process.env.AUTH_JWT_REFRESH_TOKEN_SECRET!,
  refresh_token_expired: +process.env.AUTH_JWT_REFRESH_TOKEN_SECRET_EXPIRED!,
};

export default appConfig;
