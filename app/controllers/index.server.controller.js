// Create a new 'render' controller method
exports.render = function (req, res) {
    // Set the safe student object
    const student = (!req.user) ? null : {
        _id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName
    };

    if (student) {
        console.log(JSON.stringify(student));
    } else {
        console.log("NULL");
    }

    // Use the 'response' object to render the 'index' view with a 'title' and 'student' properties
    res.render('index', {
        title: 'Student App',
        student: JSON.stringify(student)
    });
};