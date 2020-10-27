# Openweathermap by Ivan M. - test assignment

https://openweatherivan.web.app/

Openweathermap (openweatherivan) by Ivan M. project is using openweathermap.org API to display a list of 5 European cities (you can choose the ones you prefer) as SinglePageApplication. As requested on the main screen is displayed city name, wind strength and current temperature for each of the 5 cities. By clicking on each city, a forecast temperature by hour can be viewed for the next 48hours. UI is very simple and is using Angular Material, combined with flex. Order of cities displayed can be changed by drag and drop (Material) (currently a bit buggy styling).

Components:
 - WeatherCity - displays temperature by hour for selected city
 - WeatherList - displays list of 5 (hardcoded) cities (no search, adding or removing cities available at this point)
 - - Weatheritem - just somewhat styled looks for each city from WeatherList component

No services currently in use, the task is simple, but this could reduce number of API calls.

API calls:
- Inital API call is GET bulk for 5 cities (later found out that it counts as 5 API calls), then for hourly for selected city another is onecall. Check openweathermap API docs for more info. This can be further improved by just using onecall for each city. Errors are not handled at this moment (this is the first thing that will be added).

Angular router is used for handling navigation. A very simple use case, please view it in code (app-routing.module.ts.

No guards nor injectors were used in this project.

### Automatically generated  
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3. ! Upgraded to version 10

## Development server

Make sure to run `npm install` before `ng serve`. 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
