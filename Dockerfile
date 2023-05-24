FROM node:14-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
ENV HOST=0.0.0.0
EXPOSE 4173

CMD [ "npm", "run", "preview" ]