import { Decoded } from "../../interfaces/decodedToken";

export interface ITokenService {
  generateToken(userId: string): string;
  verifyToken(token: string): Decoded
}
