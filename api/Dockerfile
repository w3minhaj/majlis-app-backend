FROM node:18-alpine

WORKDIR /api

COPY package*.json ./

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start"]