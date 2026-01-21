# 1) Build stage
FROM node:22-alpine AS build
WORKDIR /app

# Copy manifests first for better caching
COPY package.json ./
COPY package-lock.json ./

# Install deps (includes devDeps needed for build)
RUN npm ci

# Copy the rest and build
COPY . .
RUN npm run build

# 2) Runtime stage (SSR; for static use the nginx version instead)
FROM node:22-alpine
WORKDIR /app

# Only what's needed to run
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --omit=dev

# Bring in compiled app
COPY --from=build /app/build ./build

ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:${PORT}/ || exit 1

CMD ["node", "build"]
