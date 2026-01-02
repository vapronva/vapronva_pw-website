FROM docker-registry.selectel.ru/library/node:25-alpine AS builder

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install --global pnpm@10 && \
    pnpm install

COPY . .

RUN --mount=type=secret,id=NODE_ENV \
    --mount=type=secret,id=SENTRY_AUTH_TOKEN \
    export NODE_ENV="$(cat /run/secrets/NODE_ENV)" \
    SENTRY_AUTH_TOKEN="$(cat /run/secrets/SENTRY_AUTH_TOKEN)" && \
    pnpm run build

FROM docker-registry.selectel.ru/library/node:25-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static
COPY --from=builder /usr/src/app/public ./public

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
