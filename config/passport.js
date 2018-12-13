const keys = require('../config/keys');


const passport = require('passport'),
mongoose = require('mongoose'),
jwt = require('jsonwebtoken'),
Client = mongoose.model('clients'),
JWTstrategy = require('passport-jwt').Strategy,
ExtractJWT = require('passport-jwt').ExtractJwt;


const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: keys.PRIVATE_KEY,
};

passport.use(
  'jwt',
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      Client.findOne({
        where: {
          name: jwt_payload.id,
        },
      }).then(user => {
        if (user) {
          console.log('user found in db in passport');
          // note the return removed with passport JWT - add this return for passport local
          done(null, user);
        } else {
          console.log('user not found in db');
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  }),
);
