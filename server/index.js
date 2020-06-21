const express = require('express');
const passport = require('passport');
const googlestat = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(new googlestat());

const PORT = process.env.PORT || 5000;
app.listen(PORT);