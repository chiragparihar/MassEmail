const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');
passport.serializeUser((user,done)=>{
  done(null,user.id);
});
passport.deserializeUser((id, done ) => {
  User.findById(id)
  .then(user => {
    done(null,user);
  });

});
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accesstoken, refreshToken, profile, done) => {
      const exsistingUser = await User.findOne({ googleId: profile.id });

      if (exsistingUser) {
        return done(null, exsistingUser);
      } 
      const user = await new User({ googleId: profile.id, username: profile.displayName }).save()
      done(null, user);
      
    }
  )
);