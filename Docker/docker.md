//How to run the image
docker run image_name
//Run image in background or in detached mode
docker run -d image_name
//Run image with port mapping
docker run -d -p mac_port_no:container_port_number image_name

//Create A Volume
docker volume create image_name

//Create A Network
docker create network network_name

//Create a image
docker build -t image_name .

//How to connect database in docker
docker run -p mac_port:image_port -e DATABASE_URL="" imagename

//How to run volume
docker run -v volume_name:/data/db -p mac_port:image_port image_name

//How to connect database with network
docker run -d -v volume_name:/data/db --name new_network_name --network network_name -p mac_port:image_port image_name
