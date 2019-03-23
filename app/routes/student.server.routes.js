// Load the module dependencies
const students = require('../controllers/student.server.controller');
const passport = require('passport');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'signup' routes 
    app.route('/api/auth/signup').post(students.signup);

    // Set up the 'signin' routes 
    app.route('/api/auth/signin').post(students.signin);

    // Set up the 'signout' route
    app.route('/api/auth/signout').get(students.signout);
};