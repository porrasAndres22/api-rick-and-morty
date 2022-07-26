import dotenv from 'dotenv'
dotenv.config();

export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'rickandmorty',
    MONGO_USER: process.env.MONGO_USER || 'andres',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'ef3-CTgwQF3qaZ',
    MONGO_HOST: process.env.MONGO_HOST || '@cluster0.n3tkt.mongodb.net/',
    PORT: process.env.PORT || 4000,
    SESSION: {
        secret: '12345678',
        resave: true,
        saveUninitialized: true
    }
}

