FROM node:8.16.1-alpine
WORKDIR /app
COPY package.json /app
COPY server.js /app
RUN npm install
COPY . /app
CMD node server
EXPOSE 8081
