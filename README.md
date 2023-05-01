# ProjectAngular

Aplicación que muestra la descripción del producto para "conocer mi sobrino"
Y adicional muestra diferentes ofertas de productos adicionales que pueden aportar a este.\


## Desarrollo

Para esta aplicación se desarrollan dos módulos, el primero es el que contiene la parte del header y 
el segundo contiene la información del producto y la lista de los productos adicionales.\

Para visualizar los productos se implementa una api y se consume un método GET para obtener la lista 
de los productos adicionales.\

API: `https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/`
MÉTODO-GET: `cards`
No tiene request


## Despliegue

Para generar el despliegue de la aplicación se debe correr el siguiente comando

`npm run build:all` \

Este comando genera el compilado de la aplicación en un archivo .js y .css los cuales se comprimen
con el index.html que se encuentran en la carpeta de elements.\

Se crea el archivo "project.zip" para el despliegue.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
