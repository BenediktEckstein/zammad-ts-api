export type AuthParams =
  | { username: string; password: string; token?: string; bearer?: string }
  | { username?: string; password?: string; token: string; bearer?: string }
  | { username?: string; password?: string; token?: string; bearer: string };