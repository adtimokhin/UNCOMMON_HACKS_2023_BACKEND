import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    eventTime: String,
    eventLocation: String,
    eventDate: {
        type: Date    },
    deadline: {
        type: Date},
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;