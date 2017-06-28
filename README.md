This is a Todo application implemented using Kotlin, Typescript and Angular. It has the objective of showing the usage of those technologies to build a small (not yet feature complete) application. 

# How to run:

## Server side
```
cd /server
./mvnw spring-boot:run
```

## Database 
By default the application uses Postgres. The easiest way of installing is using docker:
```
docker pull postgres
docker run --name postgres -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres
```

# Front-end
* Install npm
* Install [Yarn](https://yarnpkg.com/en/docs/install)
* Install [Angular-CLI](https://cli.angular.io/)

```
cd /static
yarn
ng serve
```
