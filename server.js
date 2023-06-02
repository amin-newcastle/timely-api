const express = require('express');
const dotenv = require('dotenv');

// Route files
const users = require('./server/routes/users');

// Load env vars
dotenv.config({ path: 'server/config/config.env' });

const app = express();

// Mount routers
app.use('/api/v1/users', users);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
