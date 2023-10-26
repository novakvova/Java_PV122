# Learn about building .NET container images:
# https://github.com/dotnet/dotnet-docker/blob/main/samples/README.md
FROM openjdk:21-jdk-slim

RUN apt-get update
RUN apt-get install -y maven


WORKDIR /app
COPY . /app

WORKDIR /app
RUN mvn clean install

WORKDIR /app/target

EXPOSE 8080

CMD ["java", "-jar", "pv122.jar"]


