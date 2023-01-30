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

router.put('/', (req,res,next) => {
    const inputJsonData = {
        orgName: req.body.orgName,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    res.status(200).json({
        message: 'Handel PUT request for corporates',
        data: inputJsonData
    });
});

router.post('/', (req,res,next) => {
    const inputJsonData = {
        corporateId: req.body.corporateId,
        orgName: req.body.orgName,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    res.status(201).json({
        message: 'Handel POST request for corporates',
        data: inputJsonData
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