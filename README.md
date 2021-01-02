# Angular Beginner Guide

## Getting started

- Install latest version of Node.js. Refer to https://nodejs.org/en/
- Install TypesScript language. Use command `npm install typescript --save-dev`
- If you have already TypesScript installed, update it using command `npm install -g typescript@latest`
- Choose right IDE, for instance `Visual Studio Code` or `Web Storm`.
- Install Angular CLI, use command `npm install -g @angular/cli`
- To check Angular version `ng version`
- Use `npm install` to install all dependencies of a project
- Install TSLint interpreter `npm install tslint typescript --save-dev`

## Create application in Angular CLI

- Create new angular application, use command `ng new hello-world`
- Build application command is `ng build`
- Run application with `ng serve --open`
- Command to create new component: `ng generate component [component_name]`

## Structure of an Angular application

- `packages.json` -- contains all dependencies of a project
- `src/app/app.component.ts` -- main component of an application
- `src/app/app.module.ts` -- entry point of an application
- `main.ts` -- initializes a platform to run `app.module.ts`
- `tsconfig.json` -- configuration of TypesScript compiler
- `Angular.json` -- general configuration of an application

## To do

- Write a program which updates div text with text from fields
- Write a program which updates field with text from other fields
- Write simple menu application, see https://angular.io/guide/router-tutorial
- Write program which consumes API


## Road map

- https://metanit.com/web/angular2/2.5.php
- https://www.techiediaries.com/angular-11-tutorial-example-rest-crud-http-get-httpclient/

- Add `.gitattributes` file

## Notes

- Component should be called inside `index.html` by tags `<component></component>`
- Keyword `export` it TS class is analog of `public` in `C#`
- Property `template` of component -- is a view which user sees
- Property `selector` of component -- is how we call component inside `index.html`, e.g `<component></component>`
- Property `styles` of component -- keeps particular styles.
- Property `templateUrl` of component -- specifies html view of component
