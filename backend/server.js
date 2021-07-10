const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const db = require("./models/");
db.sequelize.sync();

//for development only
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// simple route
// app.get("/", (req, res) => {
//   res.json({ testing: "Backend is running" });
// });

require("./routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
