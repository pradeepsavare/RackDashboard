# Stage 1: Build
FROM node:20-slim AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --force --silent

# Copy source code
COPY . .

# Build the app (Vite outputs to /app/dist)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
