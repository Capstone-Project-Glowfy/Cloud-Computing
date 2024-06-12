FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY secret/test-apa-aja-storage.json ./test-apa-aja-storage.json

CMD ["npm", "start"]
