require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const uuid = require("uuid");

const app = express();
const PORT = process.env.PORT || 5000;
const myDatabase = require("./configs/db.config");
const myCors = require("./configs/cors.config");
const myPassport = require("./configs/passport");

// DB config
myDatabase(app);

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Passport config
myPassport(app);

// Logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Cors config
myCors(app);

// // Global vars
// app.use((req, res, next) => {
//   req.id = uuid.v4();
//   next();
// });

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/transactions", require("./routes/transactions"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
