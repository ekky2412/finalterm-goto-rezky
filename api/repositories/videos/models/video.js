import mongoose from "mongoose"

const videoSchema = mongoose.Schema({
    videoID: {
        required: true,
        type: "String"
    },
    urlThumbnail: {
        type: "String"
    },
    urlVideo: {
        required: true,
        type: "String"
    }
}, {
    versionKey: false
})

export default mongoose.model('Video', videoSchema)