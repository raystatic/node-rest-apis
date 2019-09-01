const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling /GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling /POST requests to /products'
    });
});

router.get('/:productId',(req, res, next) => {
    const id = req.params.productId;
    if(id === '0'){
        res.status(200).json({
            message: 'You got the correct product!',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You got the wrong one!'
        });
    }
});

router.patch('/:productId',(req, res, next) => {
    const id = req.params.productId;
    if(id === '0'){
        res.status(200).json({
            message: 'You got the product Updated!',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You got the wrong one!'
        });
    }
});

module.exports = router;