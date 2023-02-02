FROM node:18-alpine

WORKDIR /dashboard

COPY package*.json ./

RUN npm install

EXPOSE 5002

CMD ["npm", "run", "dev"]