const ContactRoutes = require('./contact_routes')

module.exports = function(app, contact) {
  // Other route groups could go here, in the future
  ContactRoutes(app, contact)
}