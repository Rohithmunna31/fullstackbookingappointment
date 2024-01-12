const express = require("express");

const path = require("path");

const route = express();

const adminController = require("../controllers/admin");

route.get("/adduser", adminController.getAdduser);
// route.post("/adduser", adminController.postAdduser);

// route.use("/book/:name/:phone/:email", adminController.postAdduser);

module.exports = route;
