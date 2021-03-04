const mongoose = require("mongoose");

module.exports = (app) => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    })
    .then((db) =>
      console.log(`Connected to DB name: ${db.connections[0].name}`)
    )
    .catch((err) => console.log(`DB connection error: ${err}`));
};
