// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Datos de usuario simulados
const user = {
    email: 'usuario@mail.com',
    password: 'abc123456'
};

// Ruta para login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === user.email && password === user.password) {
        return res.status(200).json({ message: 'Login exitoso' });
    } else {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
