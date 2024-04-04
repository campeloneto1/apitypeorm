import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import UserRoutes from './routes/user.routes';
import PerfilRoutes from './routes/perfil.routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/users', UserRoutes);
app.use('/perfis', PerfilRoutes);

export default app;