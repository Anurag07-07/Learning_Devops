FROM node:22

WORKDIR /app

# Copy cached package folder if it not get changed and other prisma file also
COPY package* .
COPY ./prisma .
# And this two steps get skipped if no change in packages and prisma folder
RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 3000
# All of this run when image is create


CMD [ "node","dist/index.js" ]
# This Run when is started