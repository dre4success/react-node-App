const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 }
});

mongoose.model('User', userSchema);
