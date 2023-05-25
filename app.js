const express = require('express');
const apiRoutes = require('./server/routes/api.routes')
const app = express();

app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
