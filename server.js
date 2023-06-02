const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route files
const users = require('./server/routes/users.routes');

// Load env vars
dotenv.config({ path: 'server/config/config.env' });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/users', users);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
