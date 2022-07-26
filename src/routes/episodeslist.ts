import {Schema, model} from 'mongoose'

const listepisodesSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    episodes: {
        type: Array
    }
},{versionKey: false})

export default model('listepisodes', listepisodesSchema);