const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE;
mongoose.connect(DB).then(console.log("Connected To The Database"));

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App Running On Port ${port} ...`);
});
