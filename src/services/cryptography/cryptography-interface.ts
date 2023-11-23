export interface ICryptographyService {
  hasher(value: string): Promise<string>;
  hasherCompare(value: string, hash: string): Promise<boolean>;
}
