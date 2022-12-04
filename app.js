const express = require("express");
const cors = require("cors");
const app = express();

const DBConnection = require("./db/dbConnection.js");

const userRoute = require("./routes/userRoute");

// Connect Database
DBConnection;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
});
