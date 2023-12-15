const express = require("express");
const path = require("path");

// declare static path
let staticPath = path.join(__dirname, "src");

// initialize express
const app = express();

// middlewares
app.use(express.static(staticPath));
app.use(express.json());

// routes
// home page
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// teachers page
app.get("/teachers", (req, res) => {
  res.sendFile(path.join(staticPath, "teachers.html"));
});

// error page
app.get("/404", (req, res) => {
  res.sendFile(path.join(staticPath, "404.html"));
});
app.use((req, res) => {
  res.redirect("/404");
});

// start server
app.listen(3000, () => {
  console.log("listening on port 3000.........");
});
