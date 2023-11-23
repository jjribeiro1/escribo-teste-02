import { ISignUpService } from './sign-up-interface';
import { SignUpInput } from '../../interfaces/sign-up-input';
import { SignUpOutput } from '../../interfaces/sign-up-output';
import { IUserRepository } from '../../repository/user-repository-interface';
import { ICryptographyService } from '../cryptography/cryptography-interface';
import { ITokenService } from '../token/token-service-interface';
import { formatDateUTC } from '../../utils/format-date-utc';

export class SignUpServiceImpl implements ISignUpService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly cryptography: ICryptographyService,
    private readonly tokenService: ITokenService
  ) {}

  async execute(data: SignUpInput): Promise<SignUpOutput> {
    const emailAlreadyExists = await this.userRepository.findByEmail(data.email);
    if (emailAlreadyExists) {
      throw new Error('Email já existente');
    }

    const signUpinput = {
      ...data,
      senha: await this.cryptography.hasher(data.senha),
    };
    const user = await this.userRepository.create(signUpinput);
    const { id, data_criacao, data_atualizacao, ultimo_login } = user;
    const token = this.tokenService.generateToken(id);

    return {
      id,
      data_atualizacao: formatDateUTC(data_atualizacao),
      data_criacao: formatDateUTC(data_criacao),
      ultimo_login: formatDateUTC(ultimo_login as Date),
      token,
    };
  }
}
