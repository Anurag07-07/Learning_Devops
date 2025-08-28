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

CODE 1st.=> current working dir 2nd.=> WORKDIR that has been written in Docekerfile

create docker image or build image
docker build -t imagename .

