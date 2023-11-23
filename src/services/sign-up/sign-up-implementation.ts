import { ISignUpService } from './sign-up-interface';
import { SignUpInput } from '../../interfaces/sign-up-input';
import { SignUpOutput } from '../../interfaces/sign-up-output';
import { IUserRepository } from '../../repository/user-repository-interface';
import { ICryptographyService } from '../cryptography/cryptography-interface';
import { ITokenService } from '../token/token-service-interface';

export class SignUpServiceImpl implements ISignUpService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly cryptography: ICryptographyService,
    private readonly tokenService: ITokenService
  ) {}

  async execute(data: SignUpInput): Promise<SignUpOutput> {
    const signUpinput = {
      ...data,
      senha: await this.cryptography.hasher(data.senha),
    };
    const user = await this.userRepository.create(signUpinput);
    const { id, data_criacao, data_atualizacao, ultimo_login } = user;
    const token = this.tokenService.generateToken(id);

    return {
      id,
      data_atualizacao,
      data_criacao,
      ultimo_login,
      token,
    };
  }
}
