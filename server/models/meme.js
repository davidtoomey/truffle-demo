const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
	img: { data: Buffer, contentType: String },
	title: { type: String },
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	}
});

const Meme = mongoose.model('meme', MemeSchema);

module.exports = Meme;