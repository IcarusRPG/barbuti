# Barbutti Barbearia - Monorepo

Plataforma web escalável para gestão completa da **Barbutti Barbearia**, com foco em arquitetura profissional para evolução contínua.

## Arquitetura

```txt
apps/
  api/        # NestJS + Prisma + PostgreSQL
  web/        # Next.js + Tailwind
packages/
  ui/         # componentes compartilhados
  types/      # tipos compartilhados
  config/     # configurações compartilhadas
  utils/      # utilitários compartilhados
```

## Funcionalidades já estruturadas

- Autenticação com JWT + refresh token.
- Seed com usuário inicial `adminicarus` com troca obrigatória de senha no primeiro acesso.
- Módulos backend para usuários, funcionários, barbeiros, serviços, clientes, agendamentos, conversas, branding, dashboard, financeiro, integrações e auditoria.
- Schema Prisma cobrindo entidades essenciais solicitadas.
- Painel frontend com telas mínimas (login, primeiro acesso, dashboard, agenda, agendamentos, clientes, barbeiros, funcionários, serviços, conversas, configurações, usuários e agendamento público).
- Tokens de tema com RGB para personalização da marca.

- `apps/web/public/index.html` criado como portal HTML de entrada com logo maior, layout premium e links para todas as rotas principais do sistema (com URL base configurável).

## Stack

- **Frontend:** Next.js + TypeScript + Tailwind
- **Backend:** NestJS + TypeScript
- **Banco:** PostgreSQL
- **ORM:** Prisma
- **Monorepo:** pnpm workspaces

## Setup rápido

1. Copie variáveis:
   ```bash
   cp .env.example .env
   ```
2. Execute setup:
   ```bash
   ./setup.sh
   ```
3. Rode API e web:
   ```bash
   pnpm dev
   ```

## Portas

- Web: `http://localhost:3000`
- API: `http://localhost:3001`
- A API possui redirecionamento de `/`, `/login` e `/agendar` para o frontend (`WEB_URL`) para evitar erro `Cannot GET /login` quando o acesso for feito na porta da API.

## Seed inicial

- Usuário: `adminicarus`
- Senha temporária: `Icarus#Goias!123`
- `mustChangePassword = true`

## Integrações preparadas

- Cloudinary (upload e remoção centralizados por envs).
- Google Calendar e Microsoft Graph (camada de providers preparada).
- n8n/webhook (configuração por env).

## Próximos passos recomendados

- Implementar guards RBAC por perfil/permissão.
- Conectar telas frontend aos endpoints reais via fetch client.
- Adicionar realtime em conversas com WebSocket (gateway NestJS).
- Finalizar fluxos de CRUD completos com paginação e validações avançadas.

### Uso do HTML via n8n webhook

Quando o `index.html` for retornado por webhook (ex.: domínio do n8n), informe a URL real do frontend com o parâmetro:

```txt
...?web_url=https://SEU-FRONTEND
```

Ou injete no HTML o placeholder `__BARBUTTI_WEB_URL__` com a URL final do frontend no fluxo do n8n.
