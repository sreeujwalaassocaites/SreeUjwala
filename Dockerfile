FROM node:22-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
ARG NEXT_PUBLIC_SITE_URL=https://eazykredit.franky.co.in
ARG NEXT_PUBLIC_DEPLOYMENT_STAGE=test
ENV NEXT_TELEMETRY_DISABLED=1 \
    NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL} \
    NEXT_PUBLIC_DEPLOYMENT_STAGE=${NEXT_PUBLIC_DEPLOYMENT_STAGE}
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1
