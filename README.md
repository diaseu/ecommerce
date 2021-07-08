# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Your Task

This application is a backend for an e-commerce site utilizing Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

## Create Schema in MySQL

The following GIF demonstrates how to create the schema from the MySQL shell.

<img src="https://i.imgur.com/lM6itPV.gif" alt="Create Schema from the MySQL shell">

## Database Seeding

The database can be seeded by using the CLI command `npm run seed`.
The following GIF demonstrates how to seed the database.

<img src="https://i.imgur.com/DoVrqsB.gif" alt="seed databse" />

## Starting the Server

The server can be started by using the CLI command `node server.js`.
The following GIF demonstrates how to start the application’s server.

<img src="https://i.imgur.com/xNx5Wrv.gif">


## Demo

The following GIF shows the application's GET routes to return all categories, all products, and all tags being tested in Postman:

<img src="https://i.imgur.com/BZXqeLE.gif" alt="GET">

The following GIF shows the application's GET routes to return a single category, a single product, and a single tag via ID being tested in Postman:

<img src="https://i.imgur.com/pHxgEUP.gif" alt="GET by ID">


The following GIF shows the application's POST, PUT, and DELETE routes for categories being tested in Postman:

-Insert Here-

### Walkthrough Video

* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how to create the schema from the MySQL shell.

* The walkthrough video must demonstrate how to seed the database from the command line.

* The walkthrough video must demonstrate how to start the application’s server.

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.

  * Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.

  * Syncs Sequelize models to a MySQL database on the server start.

  * Includes column definitions for all four models outlined in the homework instructions.

  * Includes model associations outlined in the homework instructions.