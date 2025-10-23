# Base nginx image
FROM nginx:stable-alpine AS base
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install build dependencies (for packages needing native compilation)
RUN apk add --no-cache python3 make g++

# Copy dependency files
COPY package*.json tsconfig*.json vite.config.* ./

# Install dependencies (with lock file)
RUN npm ci --force

# Copy source code
COPY . .

# Build Vite app
RUN npm run build

# Final nginx image
FROM base AS final
COPY --from=build /app/dist /usr/share/nginx/html
