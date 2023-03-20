const express = require("express");
const app = express();
const port = 3000 | process.env.PORT;
const connectDB = require("./connection/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
const routes = require("./routes/tasks");
app.use(routes);

const connect = async () => {
  try {
    await connectDB(process.env.mongoUri);

    app.listen(port, () => {
      console.log(`server is listening on port no ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connect();
