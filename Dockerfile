FROM node:16.13.0-alpine3.14

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV HOST 0.0.0.0
ENV PORT 3000

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]