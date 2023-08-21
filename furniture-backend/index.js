const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const corsOptions = {
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
const productRouter = require('./routes/productsRouter');
const port = process.env.PORT || 3000;

dotenv.config({ path: './config.env' });
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Database Connected!'))
    .catch((err) => console.log(err));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/api/products', productRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
