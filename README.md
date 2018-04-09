# Quasi Etsy

##### A web app that is an imitation of the Etsy website.  03/30/18

## By Sara Hamilton

# Description
This is the Epicodus weekly project for weeks 3 and 4 of the JavaScript course.  Its purpose is to display understanding of Angular.  

## Current Functionality
  ### User Stories
  * a user can
    * view listings
    * filter listings by category
    * create listings
    * assign categories to listings
    * edit listings

  ### Models
    * User
    * Listing

  ### Components
    * new-listing
    * marketplace

  ### Methods
    * addUser
    * addShop
    * addListing

  ### Pipes / Filtering Methods
    * category

## Functionality to Implemented at a Future Date
  ### User Stories
  * a user will be able to
    * search listings
    * create an account
    * mark a listing as favorite
    * mark a shop as favorite
    * add items to a cart
    * leave feedback about a transaction
    * create a shop

  ### Models
    * Shop
    * Feedback

  ### Components
    * new-user - in process
    * new-shop - in process
    * add-feedback - needs to be done
    * edit-listing - needs to be done

  ### Methods
    * favoriteListing - needs to be done
    * favoriteShop - needs to be done
    * addToCart - needs to be done

  ### Pipes / Filtering Methods
    * shop - needs to be done
    * favorite - needs to be done


## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* Node JS
* Angular
* Firebase

## Run the Application  

1. ### Visit Deployed Website
```
https://quasietsy2.firebaseapp.com/
```

2. ### Install and Host Locally

  clone the github respository
  ```
  $ git clone https://github.com/Sara-Hamilton/quasi-etsy
  ```
  #### Add Firebase Credentials
  Create an account and get credentials from Firebase. https://firebase.google.com/   
  Create a new project.  
  Give it the name of your choice.  
  Select your Country/Region.  
  Choose the add Firebase to your web app option.  
  Add a file named api-keys.ts in the src/app directory.  

  Add the following code to the file with your credentials in place of xxxx.
  ```
  export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
  ```
  move into the directory
  ```
  $ cd quasi-etsy
  ```
  install npm
  ```
  $ npm install
  ```
  run the program
  ```
  $ ng serve --open
  ```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

*MIT License*

Copyright (c) 2018 **_Sara Hamilton_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
