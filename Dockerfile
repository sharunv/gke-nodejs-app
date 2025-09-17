# Stage 1: Build dependencies
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Run minimal image
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY src ./src
COPY package.json .
EXPOSE 8080
CMD ["npm", "start"]
