import { hash, compare } from 'bcrypt';
import { ICryptographyService } from './cryptography-interface';

export class CryptographyImpl implements ICryptographyService {
  async hasher(value: string): Promise<string> {
    const hashedPassword = await hash(value, 12);
    return hashedPassword;
  }

  async hasherCompare(value: string, hash: string): Promise<boolean> {
    const isValid = await compare(value, hash);
    return isValid;
  }
}
