export interface User {
  id: string;
  nome: string;
  email: string;
  senha: string;
  telefones: Telefone[];
  ultimo_login: Date | null;
  data_criacao: Date;
  data_atualizacao: Date;
}

interface Telefone {
  numero: string;
  ddd: string;
}
