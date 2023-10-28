# Spring Boot and Vite React TypeScript

Demo repo showing how to Dockerize a Vite React app and run as a static website using NGINX.

## Dependencies

Make sure you have the following installed:

- [Node](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/)

The React app was bootstrapped using [Vite](https://vitejs.dev/).

## Building and running in Docker (AppConsole)

```sh
docker build -t web_pv122_image . 
docker run -it --rm -p 5920:8080 --name pv122_container web_pv122_image

docker run -d --restart=always -p 5920:8080 --name pv122_container web_pv122_image

docker ps -a
docker stop pv122_container
docker rm pv122_container

docker rmi web_pv122_image

```

## Installation and running locally

```sh
npm run install
npm run dev
```

## Building and running in Docker (my-react-app)

```sh
docker build -t front_pv122_image .
docker run -it --rm -p 5929:80 --name front_pv122_container front_pv122_image

docker run -d --restart=always -p 5929:80 --name front_pv122_container front_pv122_image

docker stop front_pv122_container
docker rm front_pv122_container

docker rmi front_pv122_image

```

