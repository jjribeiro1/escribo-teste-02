import { SignUpInput } from '../interfaces/sign-up-input';
import { User } from '../entities/User';

export interface IUserRepository {
  create(data: SignUpInput): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  updateUserLastLogin(id: string): Promise<User | null>;
}
