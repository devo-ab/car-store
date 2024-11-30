## Car Store API
A Car Store API built with TypeScript, Node.js, Express, and MongoDB. This API allows users to manage a car inventory and place orders.

## Features

* Manage car inventory (add, update, delete cars).
* Place orders and adjust inventory automatically.
* Handle insufficient stock scenarios gracefully.

## Installation
* Clone the Repository
  
      git clone <repository-url>
      cd car-store

* Install Dependencies
 
      npm install

* Setup Environment Variables
 
      PORT=5000
      DATABASE_URL=mongodb+srv://car-store:NGPyofS1mAugfXXg@cluster0.zfuxqes.mongodb.net/car-store?retryWrites=true&w=majority&appName=Cluster0;
* Run the Application
   
      npm run start:dev
* Build for Production
 
      npm run build
* Production Mode

      npm run start:prod
##Scripts 
* npm run start:dev	(Start the server in development mode with hot reloading.)
* npm run start:prod	(Start the server in production mode.)
* npm run build	(Compile TypeScript files to JavaScript.)
* npm run lint	(Check the code for linting issues.)
* npm run lint:fix	(Automatically fix linting issues.)
* npm run format	(Format the code using Prettier.)


