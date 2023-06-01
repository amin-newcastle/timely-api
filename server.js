const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: 'server/config/config.env'});

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});