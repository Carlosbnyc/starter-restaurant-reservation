const { PORT = 5000 } = process.env;
const express = require('express'); // Ensure express is imported
const cors = require('cors'); // Import the cors package

const app = require("./app");
const knex = require("./db/connection");

// Use CORS middleware
app.use(cors()); // This will allow requests from any origin

// If you want to restrict to only your frontend origin, use:
// const corsOptions = {
//   origin: 'http://localhost:3000', // Allow only this origin
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// };
// app.use(cors(corsOptions));

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}