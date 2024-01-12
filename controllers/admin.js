const express = require("express");
const User = require("../model/data");
const path = require("path");

exports.getAdduser = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
};
