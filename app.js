const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const userRoutes = require("./Routes/userRoutes");
const roomRoutes = require("./Routes/roomRoutes");
const bookingRoutes = require("./Routes/bookingRoutes");
const reviewRoutes = require("./Routes/reviewControllers");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/rooms", roomRoutes);
// app.use("/api/v1/bookings", bookingRoutes);
// app.use("/api/v1/reviews", reviewRoutes);

module.exports = app;
