Why Important ?

1.Kubernates/Container Orchestration
2.Running proccesses in isolated enivronment
3.Starting project/auxiliary services locally

Container is mini machine run inside your machine 
Container ![alt text](image.png)
Containerization

Why Container ?
![alt text](image-1.png)
![alt text](image-2.png)

General Flow
![alt text](image-3.png)

Docker Engine
![alt text](image-4.png)

Docker registry and CLI
![alt text](image-5.png)
hub docker is the docker registry

Images vs Container
![ ](image-6.png)

How to talk with docker
![alt text](image-7.png)

Usually do
![alt text](image-9.png)

Images and Container

---

### 🔹 **Docker Image kya hota hai?**

Docker **Image** ek **blueprint (template)** hoti hai jisse container banta hai.
Image me **code, libraries, dependencies, OS files** sab ready hote hain jisse application run kar sake.

> Example:

* Tumhari ek app hai jo `Node.js` me bani hai.
* Us app ko chalane ke liye Node.js, npm, aur dependencies chahiye.
* Agar tum ek **Docker Image** banate ho to usme sab include kar dete ho.

Ek tarah se **Image = Recipe** (jo bata rahi hai dish kaise banegi).

---

### 🔹 **Docker Container kya hota hai?**

Docker **Container** ek **running instance of an image** hota hai.

* Jab tum ek image run karte ho → woh ek **container** ban jaata hai.
* Container ek isolated environment hai jisme tumhari app chalti hai.

> Example:

* Agar tumhari `node-app` ki ek Docker Image hai.
* Tum us image ko run karoge → ek **container** start ho jaayega jisme app chalegi.
* Ek image se tum multiple containers bana sakte ho.

Ek tarah se **Container = Dish** (jo recipe follow karke ban gayi hai aur tum khana kha rahe ho 😅).

---


```bash
# 1. Node.js ka ek image pull karo
docker pull node:18

# 2. Ye image dekhne ke liye
docker images

# 3. Ek container run karo
docker run -it --name mynode node:18

# 4. Ab tum container ke andar chale gaye ho (Node.js environment ready hai)
```

* **Image**: `node:18` (blueprint jisme Node.js + dependencies ready hain)
* **Container**: `mynode` (jo ab chal raha hai aur tum uske andar code run kar sakte ho).

---

### 🔹 Real-life Analogy

* **Image** = WhatsApp ka **.apk file** (sirf ek template/installable package)
* **Container** = Tumhare phone me installed **WhatsApp app** (jo chal rahi hai aur use kar sakte ho).

---

👉 Simple line:

* **Image** = Template (read-only)
* **Container** = Running instance of image (wahan tum kaam karte ho).

---

Container ports are different ports from mac ports
like mongo run on 27017 its not localhost 27017 
we have to do mapping
docker run -d -p 27018(mac machine port):27017(mongo machine port) mongo

Common docker commands
docker run mongo =>run image
docker run -d mongo =>run image in background
docker run -d -p 27017:27017 mongo =>run image with port mapping
docker images => to see images
docker ps => so all containers running
docker kill container_id => to kill the container
docker rmi Repositery => to kill image
docker rmi Repositery --force => to kill image forcefully

Create own Image
![alt text](image-10.png)

Code
![alt text](image-11.png)

CODE 1st.=> current working dir 2nd.=> WORKDIR that has been written in Dockerfile

create docker image or build image
docker build -t imagename . 
docker build -t backend_app .

How to add db link 
docker run -p 3000:3000 -e DATABASE_URL="postgres://avnadmin:ANVS_EeD1MdN-dNT40X91ln9Q-3533940-harkirat-d1b9.a.aivencloud.com:25579/defaultdb?sslmode=require" image_name


Container use bash
![alt text](image-12.png)
![alt text](image-13.png)

exit to exit the bash


Run image 
docker run -d -p 3000:3000 backend_app


![alt text](image-14.png)

Create a Volume
docker volume create volume_container

docker volume ls 
To see all volume 

Mount the folder in  mongo which actually stores the data to the volume
//The Data is persisted
docker run -v volume_database:/data/db -p 27017:27017 mongo

Model
![alt text](image-15.png)
![alt text](image-16.png)

If a container needs to store data across restart for that there is need of volume 
Volume is used to persist data  
docker contianer can't talk to each other for that both container should be on same network

//Create a docker network
docker network create networkname
docker network ls to see all the networks

//Connect mongodb to network
docker run -d -v volume_database:/data/db --name mongo_image_new_name --network  network_name -p 27017:27017 mongo

Example
docker run -d -v volume_database:/data/db --name my_mongo_network --network my_network -p 27017:27017 mongo

-d detached mode
-v volume_mount

now change the name of localhost in mongodb link with mongo_image_new_name 

then build the image again

now run the process using
docker run -d -p 3000:3000 --name any_name_you_want --network network_name image_name

Example
 docker run -p 3000:3000 --name something1 --network my_network mongodb_backend


docker ps to seee the container

docker exec containerid ls to see everything inside container 
docker exec containerid pwd to see current directory 

docker exec -it containerid /bin/bash  to run docker in interactive mode

now use ls pwd cat whatever you wants to run

ctrl+D to exit the docker exec

docker pull imagename to pull image
ex => docker pull mongo

If we push something on docker hub rather than get direct name like reponame or something we get
username/reponame

ex=>if we push mongo we get username/mongo
and to run it docker run username/reponame 

//How to push docker image
docker push name_of_repo
before that login docker cli => docker login

//How to add tag to docker image
docker build -t dockerimage:tagname . 
ex => docker build -t anurag07raj/common:v1-dev .

//Docker Compose
![alt text](image-17.png)

//Before docker compose 
//Create a network 
docker network create my_custom_network or whatever name
Ex=> docker network create harkirat_network
//Create a Volume
docker volume create my_custom_volume or whatever name
Ex=> docker volume create harkirat_volume

//Start Mongo Container 
docker run -d -v volume_database:data/db --name name  --network mycustom_network mongo or whatever image u want to run

Ex =>  docker run -d -v harkirat-volume:data/db --name harkirat_mongo  --network harkirat_network  mongo

//Create a Backend NodeJS Image

docker build -t image_name .
ex=>docker build -t harikrat_image .

//Start backend Container
docker run --network newtork_name -p 3000:3000 image_name
ex=> docker run --network harkirat_network -p 3000:3000 harkirat_image


How to connect to database
Replace localhost in url with image_name(name of the container that run mongodb)

ex => mongodb://harkiart_mongo:27017/Mydatabase
Close the existing container
Rebuild the image
Start the backend container again

![alt text](image-18.png)

in docker yaml is two services are writeen than they automatically connect to same network but we have to give the volume

To run docker compose 
//It can come with docker desktop
first install docker-compose
 and then run docker-compose up

 In Bind Mount the file or directory in host machine is mounted with container
 ![alt text](image-19.png)

 How to make a Bind 
 docker run -p mac_add:container_address  -v current_directory:image_name/dir  image_name
 docker run -p 5173:5173  -v ./app:/reactapp/app reactapp

 Bind Mount in React

 Got it 👍 You’re mounting your local code into the container with:

```bash
docker run -p 5173:5173 -v ./app:/reactapp/app reactapp
```

But your **changes are not reflecting in the browser**.
That’s a common issue with React (especially **Vite**) inside Docker. Here’s why:

---

### 🔍 Why changes are not showing:

1. **Vite uses hot-reload** but needs proper file watching (`chokidar`).
   Inside Docker, file system events from mounted volumes don’t always propagate correctly unless we enable polling.

2. **Your container may already have old build files** – if your Dockerfile did `npm run build`, then it’s serving a static build (no live reload).
   Mounting source won’t change the built files.

---

### ✅ Fix

If you want **live reload (development mode)** inside Docker:

1. **Dockerfile (development mode)**:

   ```dockerfile
   FROM node:18

   WORKDIR /reactapp

   COPY package*.json ./
   RUN npm install

   # Copy the source code
   COPY . .

   # Expose Vite's default port
   EXPOSE 5173

   # Enable polling so file changes in mounted volume are detected
   ENV CHOKIDAR_USEPOLLING=true

   CMD ["npm", "run", "dev", "--", "--host"]
   ```

2. **Run with volume mount**:

   ```bash
   docker run -it -p 5173:5173 -v ${PWD}:/reactapp reactapp
   ```

   (On Windows Git Bash, use `//c/path/to/app:/reactapp` instead of `${PWD}`)

3. Now when you edit files locally → Docker container sees changes → Vite hot reload works.

---

⚡ If you instead want a **production build** (no auto-reload, just fast static site), then you shouldn’t mount volumes — instead, use an `nginx` container.

---

👉 Do you want me to give you **two separate Dockerfiles** (one for development with hot reload, one for production with nginx), so you can switch depending on your use case?



Docker Compose

Perfect 👌 let’s break down your `docker-compose.yml` line by line in plain English so you know exactly what’s happening:

---

```yaml
version: "3.8"
```

* This specifies the **Docker Compose file format version**.
* `"3.8"` works with newer Docker versions and supports most modern features (like networks, healthchecks, etc.).

---

```yaml
services:
```

* Defines all the **containers (services)** you want Docker Compose to run.
* Each service is like a separate container, but they can talk to each other easily on the same network.

---

### **MongoDB service**

```yaml
  mongodb:
    image: mongo
    container_name: mongodb
```

* `mongodb:` → name of the service.
* `image: mongo` → uses the official MongoDB image from Docker Hub.
* `container_name: mongodb` → the actual container will always have this fixed name (otherwise Compose auto-generates names).

```yaml
    ports:
      - "27017:27017"
```

* Maps **container port 27017** → **host port 27017**.
* So you can connect to MongoDB from your local machine at `localhost:27017`.

```yaml
    volumes:
      - mongodb_data:/data/db
      - mongodb_data2:/data
```

* Mounts Docker volumes into the container to **persist MongoDB data**.

  * `mongodb_data:/data/db` → standard MongoDB storage directory. Data here survives container restarts.
  * `mongodb_data2:/data` → another mount point (could be used if your app writes to `/data`).

---

### **Backend service**

```yaml
  backend:
    image: backend22
    container_name: backend_application
```

* Runs a custom image named `backend22` (probably built with your code).
* `container_name: backend_application` → fixes the container name.

```yaml
    ports:
      - "3000:3000"
      # - "4521:3000" # extra port if you want to add
```

* Maps **container port 3000** → **host port 3000**.
* So your backend API is available on `http://localhost:3000`.
* The commented line (`# - "4521:3000"`) shows how you could expose the same app on another host port (`4521`).

```yaml
    environment:
      - MONGO_URL=mongodb://mongodb:27017
```

* Defines an environment variable inside the backend container.
* Here it’s the MongoDB connection string.
* Notice: `mongodb://mongodb:27017` —

  * The hostname `mongodb` matches the **service name** above.
  * This works because Docker Compose automatically sets up a network where services can reach each other by service name.
  * So your backend connects to the MongoDB container without needing IP addresses.

---

### **Volumes (bottom section)**

```yaml
volumes:
  mongodb_data:
  mongodb_data2:
```

* Defines named Docker volumes.
* These are managed by Docker and live outside of the container lifecycle.
* Meaning: even if the `mongodb` container is deleted, the database files in `mongodb_data` still exist.

---

⚡ In short:

* **`mongodb` service** → runs MongoDB, data stored in persistent volumes.
* **`backend` service** → runs your backend app, connects to MongoDB using the service name.
* **Volumes** → keep data safe across container restarts.

---

👉 Do you want me to also explain how you could add your **React frontend** to this `docker-compose.yml` so all 3 (frontend, backend, DB) run together?

//Run postgres in Docker
docker run -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=anurag07raj  -d -p 5432:5432 postgres

Connection string will be
postgresql://postgres:mysecretpassword@localhost:3542/postgres