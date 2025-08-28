FROM node:22

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000
# All of this run when image is create


CMD [ "node","dist/index.js" ]
# This Run when is started