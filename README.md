(View Raw will give you the markdown that you can copy to your repos!)

![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# PROJECT NAME

weekend-sql-to-do-list

## Description

_Duration: 2 Week Sprint_

This project allows the user to create a to-do list by adding tasks to their list.

What problem did you solve? How did you solve it?

The problem I came across was how to change the CSS of the row once the the check button was clicked. With the help of Todd, I learned that this could be done in the CSS by using a class selector then using the attribute selector to select the data-status attribute.

## Screen Shot

![Alt text](./Screen%20Shot%202022-07-03%20at%2012.29.53%20PM.png?raw=true 'screenshot')

### Prerequisites

Link to software that is required to install the app (e.g. node).

-   [Node.js](https://nodejs.org/en/)
-   [Express.js]
-   [Node.js]
-   [Node.js]

## Installation

### Create a Database

1. Be sure to create a new database through Postico. Use the name `weekend-to-do-app`. You will need to use this name in your database connection configuration on your server.

2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

How does someone use this application? Tell a user story here.

1. A user types in a task they want to complete
2. When the user clicks on the add button, the task will show up in a table
3. Once completed, a user can click on the check button to mark it as completed. The background row and text will turn green.
4. A user can click the delete button to delete the task from the table.

## Built With

Node.js
Express.js
PostGreSQL

## License

[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support

If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)
