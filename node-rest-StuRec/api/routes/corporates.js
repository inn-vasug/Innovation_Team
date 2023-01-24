const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handel GET request for corporates'
    });
});

router.get('/:corporateId', (req,res,next) => {
    const id = req.params.corporateId;
    res.status(200).json({
        message: 'Handel GET request for specific corporates',
        id: id
    });
});

router.post('/', (req,res,next) => {
    res.status(201).json({
        message: 'Handel POST request for corporates'
    });
});

router.delete('/:corporateId', (req,res,next) => {
    const id = req.params.corporateId;
    res.status(200).json({
        message: 'Handel DELETE request for corporates',
        id: id
    });
});

module.exports = router;