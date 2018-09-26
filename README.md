## Express + Sequelize API

### Estrutura do projeto:

+ routes (rotas da aplicação)
+ models (modelos da aplicação)
+ config
    + config.json (configurações do db e env?)
+ database
    + migrations (cria as tabelas e seus campos)
    + seeders (popula o banco com alguns dados)
+ index.js (main da aplicação)

### Rodando o projeto:
- Instando dependências -> `npm install`
- Rodando migrations -> `npm run migrations`
- Populando o banco -> `npm run seeders`
- Rodando o projeto -> `npm run dev`

> Criando uma nova migration:
- `sequelize migration:create --name=nome_migration`

> Executando as migrations:
- `sequelize db:migrate`

> Removendo as migrations:
- `sequelize db:migrate:undo`

> Criando uma nova seeder:
- `sequelize seed:generate --name nome_seeder`

> Executando as seeders:
- `sequelize db:seed:all`

> Removendo seeders:
- `sequelize db:seed:undo:all`

> Criando um novo model:
- `sequelize model:create --name Usuario attributes nome_usuario:string`
