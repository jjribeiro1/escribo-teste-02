export interface ITokenService {
  generateToken(userId: string): string;
}
