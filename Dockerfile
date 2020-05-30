FROM node:8.16.1-alpine
WORKDIR /app
COPY package.json /app
COPY server.js /app
RUN npm install
COPY . /app
EXPOSE 8081
CMD [ "node", "server.js" ]