const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
require("./models/Users");
require("./models/Surveys");
require("./services/passport");
const passport = require('passport');
const app = express();
const keyes = require("./config/keys");
mongoose.Promise = global.Promise;
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
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);


if(process.env.NODE_ENV === 'production'){
  //express will serve up production assets
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })

}

PORT = process.env.PORT || 5000;
app.listen(PORT);
