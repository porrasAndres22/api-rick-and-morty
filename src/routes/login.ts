import {Schema, model} from 'mongoose'

const loginSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    pass: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false
    }
)

export default model('login', loginSchema);