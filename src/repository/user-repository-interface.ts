import { SignUpInput } from '../interfaces/sign-up-input';
import { User } from '../entities/User';

export interface IUserRepository {
  create(data: SignUpInput): Promise<User>;
  findById(id: string): Promise<User | null>;
}
