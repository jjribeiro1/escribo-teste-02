
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jjribeiro1/escribo-teste-02.git
```

Entre no diretório do projeto

```bash
  cd escribo-teste-02
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`
`DIRECT_URL`
`JWT_SECRET`



## Conectando com banco de dados
### Para esse projeto eu utilizei um postgres como serviço que pode ser encontrado nesse link: https://neon.tech/

#### Para se conectar, voce precisa criar uma conta ou se conectar com o github/google

#### Após criar conta, crie um novo projeto. É bem simples, só vai te pedir para dar um nome ao projeto.

#### Com o projeto criado, você clica em "Dashboard". Lá voce vai encontrar uma seção de "Connection Details"

#### Na seção de "Connection Details", selecione "Prisma" e copie as strings de conexão para preencher as variáveis de ambiente "DIRECT_URL" e "DATABASE_URL" no projeto local. OBS: As strings de conexão vem com as senhas escondidas, só clicar no ícone do olho para revelar

#### Após preencher as variáveis de ambiente corretamente no projeto, rode o comando abaixo para subir o banco: 

```bash
  npx prisma db push
```



## Funcionalidades

- Rota /sign-up (cadastra usuário)
- Rota /sign-in (autenticação de usuário)
- Rota /profile/:id (busca um usuário por ID e retorna suas informações desde que envie um token de autenticação JWT no cabeçalho)


