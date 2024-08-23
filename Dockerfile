# 使用 Node.js 镜像作为基础镜像构建
FROM node:20-slim

ARG NEXT_PUBLIC_APP_URL
ARG NEXTAUTH_URL
ARG NEXTAUTH_SECRET

# ARG GITHUB_CLIENT_ID
# ARG GITHUB_CLIENT_SECRET

ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET

#ARG FACEBOOK_CLIENT_ID
#ARG FACEBOOK_CLIENT_SECRET

ARG RESEND_API_KEY
ARG RESEND_FROM

ARG STRIPE_API_KEY
ARG STRIPE_WEBHOOK_SECRET

ARG ADMIN_EMAIL

ARG POSTGRES_URL
ARG LLM_POSTGRES_URL

ARG MYSQL_URL

ENV NODE_ENV=production

# 设置工作目录
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y libssl-dev

COPY . .

# 安装 pnpm & yarn
RUN npm install -g pnpm
# 安装 Bun
RUN npm install -g bun
RUN bun i -g prisma-kysely

RUN node --version
RUN yarn --version
RUN bun --version 

# 安装项目依赖
RUN bun install --frozen-lockfile

# 使用 dotenv-vault 拉取 .env 文件
RUN npx dotenv-vault@latest pull production --dotenvMe=me_2a7144e37c3870d070d812ca5b59eec761c6b565ac5ccf1c7a1538950bf5d5c5 -y

RUN cat .env.production

RUN cp .env.production .env.local
# 生成 prisma client
# RUN bun run db:generate

# generate prisma client
#RUN bun run db:generate

# 构建应用
RUN bun run build

# 暴露端口，这应该与你的应用实际使用的端口一致
EXPOSE 3000

# 运行应用
CMD [ "bun", "run", "dev:web" ]
