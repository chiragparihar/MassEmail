const express = require('express');
require('./services/passport')
const app = express();
require('./routes/authRoutes')(app);
const mongoose = require('mongoose');
require('./models/Users')
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
PORT = process.env.PORT || 5000;
app.listen(PORT);