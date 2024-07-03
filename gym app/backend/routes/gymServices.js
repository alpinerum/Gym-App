const gymService = require('./../models/service-model');
const router = require('express').Router();

router.post('/addService', (req, res)=>{
    gymService.create({image: req.body.image,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        duration: req.body.duration
    }).then((service)=>{
        return res.status(200).json({msg: `${service.name} has been added`})}).catch((err)=>{return res.status(500);});
});

router.get('/getServices', (req, res)=>{
    gymService.findAll({where: {}}).then((services)=>{
        return res.send(services);
    });
});

router.get('/getService/:id', (req, res)=>{
    Product.findOne({where: {ID: req.params.id}}).then((service)=>{
        if (service != null) {
            return res.send(service);
        }
        else {return res.json(404, {error: 1, msg: "service not found"}).catch((err)=>{return res.status(404).send(err);});}
    });
});

module.exports = router;