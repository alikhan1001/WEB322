var HTTP_PORT = process.env.PORT || 3000;
const { response } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();



app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname+'/public'));


router.get("/", (req, res) => {
  res.render("index.html");
});

router.get("/plans", (req, res) => {
  res.render("plans.html");
});


router.get("/sign-up", (req, res) => {
  res.render("sign_up.html");
});

router.get("/sign-in", (req, res) => {
  res.render("sign_in.html");
});






app.use("/", router);
app.listen(process.env.port || 3000);
console.log("server is running...");