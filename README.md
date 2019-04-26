# OpenWeather

A web app for displaying 5 days weatherforecast for a city (`Bangalore, India`).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

Angular CLI need to be installed globally for building the project (for ES6 to ES5 coversion, packaging and all).

## Demo

Deployed to firebase using `firebase-cli`.

**[Open Weather](http://adamant-window.surge.sh/)**



## Development server

Run `ng serve -o` for a dev server. App will open in the browser at `http://localhost:4240/`. The app will automatically reload if you change any of the source files.

## Build

* Make sure to have the angular cli installed globally using `sudo npm install -g @angular/cli`
* Clone the repo and `cd` to the folder
* Install npm dependencies using `npm install`
* Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Other tools and commands

* Documentation deployment to GitHub pages using `https://www.npmjs.com/package/angular-cli-ghpages`. Command - `sudo ngh --dir "documentation" --no-silent`
* App deployment to firebase using `https://www.npmjs.com/package/firebase-tools`. Command - `firebase deploy`
* Generate or update documentation using `https://github.com/compodoc/compodoc`. Command - `compodoc -p src/tsconfig.app.json`

## Technology stack

HTML5, CSS3, Angular 7, Bootstrap 4, SASS, ES6, Webpack, NPM, Node

## Features

* Display 5 days weatherforecast using openweathermap api `https://api.openweathermap.org`
* Default weather city is London
* Search any city weather
* Detect current user location and display weather of the user city
* Documentation using `https://github.com/compodoc/compodoc`
* Coded with `Angular CLI` and `VS Code` in love with `Mac`
* Unit tests with `jasmine` and `karma`
* Demo deployed to `surge` using surge cli tools
* editorconfig and code lints
* 


