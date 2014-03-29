var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RsvpSchema = new Schema({
    date: {
        // auto added timestamp for creation of entry
        type: Date,
        default: Date.now
    },
    name: String,
    attending: Boolean,
    guests: Number,
    song: String,
    message: String,
    guestbook: Boolean,
    email: String,
    phone: String,
    zipcode: Number
});

module.exports = mongoose.model('Rsvp', RsvpSchema);