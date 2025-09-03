FROM node:22

WORKDIR /reactapp

COPY package* .

RUN npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]

