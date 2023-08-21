const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config({ path: './config.env' });

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Database Connected!'))
    .catch((err) => console.log(err));

//READ JSON FILE
const furniture = JSON.parse(
    fs.readFileSync(`${__dirname}/furniture-simple.json`, 'utf-8')
);

//IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Product.create(furniture);
        console.log('Data successfully loaded! ✔');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

//DELETE EXISTING DATA FROM DB
const deleteData = async () => {
    try {
        await Product.deleteMany();
        console.log('All data deleted!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
