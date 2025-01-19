import "jsonwebtoken";

declare module "jsonwebtoken" {
  export interface JwtPayload {
    name: string;
    email: string;
    picture: string;
    sub: string;
    iat: number;
    exp: number;
    jti: string;
  }
}
