/**
 * Environment variables. Use EXPO_PUBLIC_* for client-side vars.
 * Copy .env.example to .env and set values (loaded via app.config.js or babel-plugin-inline-dotenv).
 */
export const env = {
  get appEnv(): string {
    return process.env.EXPO_PUBLIC_APP_ENV ?? 'development';
  },
  get isDev(): boolean {
    return this.appEnv === 'development';
  },
} as const;

export type Env = typeof env;
