const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors"); //to color
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

//connection to the database
connectDB();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log(`Server running on port ${port}`));
