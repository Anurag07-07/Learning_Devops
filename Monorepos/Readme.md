https://projects.100xdevs.com/tracks/monorepo/monorepo-1

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)

//Build System
Vite Ts is build System as it work as compiler
![alt text](image-3.png) 

//Build system orchestroion means first that folder has build on which other folder dependent and then only other folders build

Lerna and NX is the Monorepo Framework

Turborepo and Monorepo are not same

Turborepo is not exactly a monorepo framework


![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)

![alt text](image-7.png)


how to use esbuild directly
First Command
npm i esbuild
Second Command
npx esbuild ./src/index.ts --bundle --platform=node --outfile=dist/index.js

or write "build":"esbuild ./src/index.ts --bundle --platform=node --outfile=dist/index.js" 

Third command
node dist/index.js or npm run start where "start":"node ./dist/index.js"