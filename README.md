# Topeka Chess Club Website

This website is built with React, Bootstrap, and ASP.NET Core. It is designed to provide a center Chess related information for Topeka residents. 

## Features 
* Schedule with upoming tournament information
* A way to find a coaches in a local area
* Ways to get connected with local chess clubs

## Technology Stack 
* React - Frontend library used for building user interfaces  
* Bootstrap - Frontend framework used for styling the website  
* ASP.NET Core - Backend framework used for building the website's server-side logic  
* jQuery - JavaScript library used for manipulating DOM elements  
* Node.js - JavaScript runtime environment used to execute server-side code

# Building and Running the application

This guide will walk you through the steps of building and running an ASP.NET and React application.

## Prerequisites

Before you can build and run the application, you will need to install the following: 
- Node.js 
- npm 
- Visual Studio Code (or any other text editor) 
- .NET Core SDK 3.1 or higher 
- A web browser of your choice (e.g., Chrome, Firefox, etc.) 

## Building the Application 
1. Open Visual Studio Code and open the project folder containing the code listed above. 
2. In the terminal window, run `cd ClientApp` to enter the directory of the ReactApp.
3. In the same terminal, run `npm install` to install all of the necessary dependencies for building the application.  
4. Run `npm run build` to build the application in production mode (this will create a `build` folder in your project directory).  

 ## Running the Application 
1. In Visual Studio Code, open a terminal window in your project directory.  
2. In the terminal window, run `dotnet watch` to start up ASP.NET Core server on port 7092 and proxy requests from port 5077 for React app development purposes (this command must be run before starting up React).  
3. Open a web browser of your choice and navigate to http://localhost:44481/ to view your application in action!