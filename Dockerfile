FROM node:18-alpine3.16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM node:18-alpine3.16 as production-stage
RUN mkdir /app
COPY --from=build-stage /app/.output /app/.output
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
COPY /entrypoint.sh /entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/entrypoint.sh"]