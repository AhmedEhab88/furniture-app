const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        await newProduct.save();
        res.status(200).json('Product created successfully!');
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json('Failed to retrieve products!');
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                product,
            },
        });
    } catch (error) {
        res.status(404).json(error);
    }
};

exports.searchProduct = async (req, res) => {
    try {
        const result = await Product.aggregate([
            {
                $search: {
                    index: 'Furniture',
                    text: {
                        query: req.params.key,
                        path: {
                            wildcard: '*',
                        },
                    },
                },
            },
        ]);

        res.status(200).json({
            status: 'success',
            data: {
                result,
            },
        });
    } catch (error) {
        res.status(500).json('Failed to retrieve products!');
    }
};
