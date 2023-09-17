export interface Jwt {
  userId: string;
  domains: string[];
  iat: number;
  exp: number;
  iss: string;
}
