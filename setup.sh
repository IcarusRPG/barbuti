#!/usr/bin/env bash
set -e
pnpm install
pnpm --filter @barbutti/api prisma:generate
pnpm --filter @barbutti/api prisma:migrate
pnpm --filter @barbutti/api prisma:seed
