import { SignUpInput } from '../../interfaces/sign-up-input';
import { SignUpOutput } from '../../interfaces/sign-up-output';

export interface ISignUpService {
  execute(data: SignUpInput): Promise<SignUpOutput>;
}
