Pull the ubuntu image from Docker Hub and run a container interactively.
    docker run -it --name myubntu ubuntu


Run an nginx container in detached mode and map port 8080 to 80.
    docker run -d -p 8080:80 --name mynginx nginx


List all running and stopped containers.
    docker ps 
    docker ps -a


Stop a running container and restart it again.
    docker stop container_id/container_name
    docker restart container_id/container_name


Remove a container and remove its image.
    docker rm myubuntu
    docker rmi ubunut



Pull python image and check its image layers.
    docker pull python
    docker run -it --name mypython python
    //it will enter into the python terminal where we can run pyton code
    exit
    docker exec -it mypython bash
    pip install --upgrade pip
    pip install flask
    docker commit -m "installed flak in python container" container_id new_image_name
    exit
    docker history new_image_name


