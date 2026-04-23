FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx ng build auth --configuration=production
RUN npx ng build shell --configuration=production

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/shell/browser /usr/share/nginx/html/shell
COPY --from=build /app/dist/auth/browser /usr/share/nginx/html/auth

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]