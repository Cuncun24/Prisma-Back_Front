const express = require('express');
const app = express();
const avesRoute = require('./routes/avesRoute');
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));
app.use('/api', avesRoute);

app.listen(3000, () => {
    console.log('Servidor corriendo');
});