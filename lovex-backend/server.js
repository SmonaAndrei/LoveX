const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createAdmin } = require('./utils/createAdmin');

const authRoutes = require('./routes/auth');
// alte rute: admin, users, messages

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/lovex', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        createAdmin(); // creează admin dacă nu există
    })
    .catch(err => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));
