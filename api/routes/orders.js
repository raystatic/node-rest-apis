const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'List of orders!'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling /POST requests of orders'
    });
});

router.get('/:orderId',(req, res, next) => {
    const id = req.params.orderId;
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

router.patch('/:orderId',(req, res, next) => {
    const id = req.params.orderId;
    if(id === '0'){
        res.status(200).json({
            message: 'You got the order Updated!',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You got the wrong one!'
        });
    }
});

router.delete('/:orderId',(req, res, next) => {
    const id = req.params.orderId;
    if(id === '0'){
        res.status(200).json({
            message: 'You got the order Deleted!',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You got the wrong one!'
        });
    }
});

module.exports = router;