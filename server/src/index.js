import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express()

app.use(indexRoutes)
app.use(usuariosRoutes)

app.listen(3000)
console.log('Server is running on port 3000')