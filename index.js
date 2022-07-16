const express = require('express')
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({extented:false}));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))