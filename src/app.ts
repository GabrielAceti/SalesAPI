import Routes from './routes';
import Express from 'express';
import Cors from 'cors';
const app = Express();

app.use(Cors({origin: true}))
app.use(Express.json());
app.use('/', Routes);

export default app;
