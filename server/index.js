const express = require('express');
require('./services/passport')
const app = express();
require('./routes/authRoutes')(app);
const moongoose = require('moongoose');
const keys = require('./config/keys');
moongoose.connect(keys.mongoURI);
PORT = process.env.PORT || 5000;
app.listen(PORT);