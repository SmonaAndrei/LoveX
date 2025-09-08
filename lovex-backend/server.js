// Importuri necesare
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createAdmin } = require('./utils/createAdmin');

// Import rute
const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/users'); // Decomentează dacă ai alte rute admin

// Inițializează aplicația Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Folosește rutele
app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);

// Conectare la MongoDB Atlas folosind variabila de mediu
mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('MongoDB connected');
    createAdmin(); // Cre
