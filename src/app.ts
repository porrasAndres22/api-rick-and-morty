import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import session from 'express-session'
import userRoutes from './routes/app.routes'
import sessionMiddel from './session'

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(sessionMiddel);

app.use(userRoutes);

export default app;