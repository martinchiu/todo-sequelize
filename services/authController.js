const passport = require('passport')

module.exports = {
  facebook: passport.authenticate('facebook', {
    scope: ['email', 'public_profile']
  }),
  facebookCallback: passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })
}