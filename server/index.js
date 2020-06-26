const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
require("./models/Users");
require("./services/passport");
const passport = require('passport');
const app = express();
const keyes = require("./config/keys");
mongoose.connect(keyes.mongoURI);
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keyes.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

PORT = process.env.PORT || 5000;
app.listen(PORT);
//prodId:309232042772-v0kmg8g9adrjnbflp5c38a7nej05vfqv.apps.googleusercontent.com
//pordSecret:tbN58VqS7O31F0q6IC7G9L3f