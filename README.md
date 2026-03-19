# 🏆 Project Champions API

API desenvolvida para gerenciamento de jogadores e clubes inspirados na UEFA Champions League.  
O projeto segue boas práticas de desenvolvimento backend utilizando Node.js, TypeScript e arquitetura em camadas.

---

## 📌 Sobre o Projeto

O **Project Champions** é uma API RESTful que permite gerenciar dados de clubes e jogadores, incluindo operações como criação, listagem, atualização e remoção.

O projeto foi desenvolvido com foco em:
- Organização de código
- Separação de responsabilidades
- Simulação de regras de negócio reais
- Facilidade de manutenção e escalabilidade

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- TSX (execução em ambiente dev)
- TSUP (build do projeto)
- CORS
- Play Sound

---

## 🏗️ Arquitetura do Projeto

O projeto segue o padrão de **arquitetura em camadas (Layered Architecture)**, separando responsabilidades de forma clara.

### 📁 Estrutura de Pastas

src/
├── controllers/
│ ├── playerController.ts
│ └── clubController.ts
│
├── services/
│ ├── playerService.ts
│ └── clubService.ts
│
├── repositories/
│ ├── playerRepository.ts
│ └── clubRepository.ts
│
├── models/
│ ├── playerModel.ts
│ └── clubModel.ts
│
├── routes/
│ ├── playerRoutes.ts
│ └── clubRoutes.ts
│
├── utils/
│ └── httpResponse.ts
│
└── server.ts


---

### 🔎 Responsabilidade de Cada Camada

- **Controllers** → Recebem as requisições HTTP e retornam respostas
- **Services** → Contêm as regras de negócio da aplicação
- **Repositories** → Responsáveis pelo acesso e manipulação de dados
- **Models** → Definem a estrutura e tipagem dos dados
- **Routes** → Definem os endpoints da API
- **Utils** → Funções auxiliares (ex: padronização de respostas HTTP)
- **Server** → Inicialização da aplicação

---

## 🔥 Funcionalidades

- ✅ Listar jogadores
- ✅ Buscar jogador por ID
- ✅ Criar jogador
- ✅ Atualizar jogador
- ✅ Deletar jogador
- ✅ Listar clubes
- ✅ Estrutura de dados em memória (mock database)

---

## 📡 Endpoints

### 👤 Players

| Método | Rota            | Descrição              |
|--------|----------------|----------------------|
| GET    | /players       | Lista todos jogadores |
| GET    | /players/:id   | Busca por ID          |
| POST   | /players       | Cria jogador          |
| DELETE | /players/:id   | Remove jogador        |

---

## ▶️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/douglasferreirag/project_champions.git

2. Acesse a pasta
cd project_champions
3. Instale as dependências
npm install
4. Execute em ambiente de desenvolvimento
npm run start:watch
5. Servidor
http://localhost:3333
📦 Scripts Disponíveis
npm run start:dev     # Executa uma vez
npm run start:watch   # Executa com watch mode
npm run build         # Build com TSUP
🎯 Diferenciais do Projeto

Arquitetura em camadas bem definida

Código limpo e organizado

Uso de TypeScript para maior segurança

Separação clara de responsabilidades

Projeto preparado para escalar (ex: banco de dados)

🚀 Possíveis Melhorias

Integração com banco de dados (PostgreSQL ou MongoDB)

Autenticação com JWT

Testes automatizados (Jest)

Documentação com Swagger

Dockerização

👨‍💻 Autor

Desenvolvido por Douglas Gonçalves

GitHub: https://github.com/douglasferreirag

