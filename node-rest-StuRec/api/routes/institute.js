const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handel GET request for college'
    });
});

router.get('/:instituteId', (req,res,next) => {
    const id = req.params.instituteId;
    res.status(200).json({
        message: 'Handel GET request for specific college',
        id: id
    });
});

router.post('/', (req,res,next) => {
    res.status(201).json({
        message: 'Handel POST request for college'
    });
});

router.delete('/:instituteId', (req,res,next) => {
    const id = req.params.instituteId;
    res.status(200).json({
        message: 'Handel DELETE request for college',
        id: id
    });
});

module.exports = router;