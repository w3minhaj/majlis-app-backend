FROM node:10

WORKDIR /usr/src/app/dashboard/

COPY package*.json ./

RUN npm install

EXPOSE 5002

CMD ["npm", "run", "dev"]