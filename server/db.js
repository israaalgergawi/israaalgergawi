const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {};

  mongoose.connect(process.env.DB, connectionParams)
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((error) => {
      console.error("Could not connect to database!", error);
    });
};