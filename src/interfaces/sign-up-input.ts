export interface SignUpInput {
  nome: string;
  email: string;
  senha: string;
  telefones: {
    numero: string;
    ddd: string;
  }[];
}
