const Product = require('./../models/product-model');
const router = require('express').Router();
const Sequelize = require('sequelize');

router.post('/addProduct', (req, res)=>{
    Product.create({image: req.body.image,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price
    }).then((product)=>{
        return res.status(200).json({msg: `${product.name} has been added`})}).catch((err)=>{return res.status(500);});
});

router.get('/getProducts', (req, res)=>{
    Product.findAll({where: {}}).then((products)=>{
        return res.send(products);
    });
});

router.get('/getProduct/:id', (req, res)=>{
    Product.findOne({where: {ID: req.params.id}}).then((product)=>{
        if (product != null) {
            return res.send(product);
        }
        else {return res.json(404, {error: 1, msg: "product not found"}).catch((err)=>{return res.status(404).send(err);});}
    });
});

module.exports = router;