const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    code: {
        type: String,
        // Set a unique 'code' index
        unique: true,
        // Validate 'code' value existance
        required: 'Course code is required',
        // Trim the 'code' field
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true,
        required: 'The course name cannot be blank'
    },
    section: {
        type: String,
        trim: true,
        required: 'The course section cannot be blank'
    },
    semester: {
        type: String,
        trim: true,
        required: 'The course semester cannot be blank'
    },
    created: {
        type: Date,
        default: Date.now
    },
    student: {
        type: Schema.ObjectId,
        ref: 'Student'
    }
});
mongoose.model('Course', CourseSchema);
