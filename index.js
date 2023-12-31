require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db.js');
const PORT = process.env.PORT ;

const router = require('./router');

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

db.then(() => {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}).catch((err) => console.log(err.message));
