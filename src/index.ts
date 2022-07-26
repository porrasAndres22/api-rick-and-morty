import app from './app'
import connectDb from './database'

app.listen(app.get('port'), () => {
    console.log('Hola');
    console.log(connectDb());
});