export interface SignUpOutput {
  id: string;
  data_criacao: Date;
  data_atualizacao: Date;
  ultimo_login: Date | null;
  token: string;
}
