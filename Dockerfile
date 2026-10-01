# 1) Build stage
FROM node:22.23.2-alpine3.24 AS build
WORKDIR /app

# Copy manifests first for better caching
COPY package.json ./
COPY package-lock.json ./

# Install deps (includes devDeps needed for build)
RUN npm ci --ignore-scripts

# Copy the rest and build
COPY . .
RUN npm run build

# 2) Runtime stage
FROM node:22.23.2-alpine3.24
WORKDIR /app
ARG RELEASE_SHA=development

# Only what's needed to run
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts && npm cache clean --force

# Bring in compiled app
COPY --chown=node:node --from=build /app/build ./build
COPY --chown=node:node --from=build /app/static ./static

ENV NODE_ENV=production
ENV PORT=3000
ENV RESUME_DATA_PATH=/tmp/resume-data.json
ENV RELEASE_SHA=$RELEASE_SHA
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD wget -qO- http://127.0.0.1:3000/api/health || exit 1

USER node
CMD ["node", "build"]
