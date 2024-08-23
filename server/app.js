require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./db/conn');
const User = require('./models/userSchema');
const cors = require('cors');
const router = require('./routes/router');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(router);  // Line 18

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
