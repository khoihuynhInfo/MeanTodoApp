const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./config/db");
const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
}

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});


// ======================================================

const routers = require('./routes/todoRoutes');

routers(app);