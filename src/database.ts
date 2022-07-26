import config from './config'
import mongoose, {} from 'mongoose';


 const connectDb = async () => {
    try {
        // const mongooseOptions: ConnectOptions = {
        //     useUnifiedTopology: true,
        //     useNewUrlParser: true
        // }
        // const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}${config.MONGO_HOST}${config.MONGO_DATABASE}?retryWrites=true&w=majority`);
        console.log("db ok", db.connection.name);

    } catch (error) {
        
    }
    
}

export default connectDb;