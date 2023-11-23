import { SignInInput } from '../../interfaces/sign-in-input';
import { SignInOutput } from '../../interfaces/sign-in-output';

export interface IAuthService {
  signIn(data: SignInInput): Promise<SignInOutput>;
}
