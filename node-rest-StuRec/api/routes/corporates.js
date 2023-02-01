const express = require('express');
const router = express.Router();
const { MongoClient, ServerApiVersion, ConnectionCheckOutFailedEvent, ObjectId } = require('mongodb');
const uri = "mongodb+srv://somdevm:MyPassword123@cluster0.8fhxo8x.mongodb.net/?retryWrites=true&w=majority";
const database = 'RecMgt';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function getCorporateList() {
    try {
        await client.connect();
        const db = client.db(database);
        const collection = db.collection('corporate');
        return collection.find({}).toArray();
    } catch (error) {
        throw error;
    }
}

router.get('/', (req,res,next) => {
    getCorporateList().then(dt => {
        res.status(200).json({
            message: 'Handel GET request for corporates',
            data: dt
        });
    }).catch( err => {
        res.status(500).json({
            message: 'Handel GET request for corporates. Has error',
            data: err
        });
    }).finally(() => {
        client.close();
    }); 
});

async function getCorporate(id) {
    try {
        await client.connect();
        const db = client.db(database);
        const collection = db.collection('corporate');
        return collection.findOne({_id: new ObjectId(id)});
    } catch (error) {
        console.log(error);
    }
}

router.get('/:corporateId', (req,res,next) => {
    const id = req.params.corporateId;
    getCorporate(id).then(dt => {
        res.status(200).json({
            message: 'Handel GET request for corporate',
            data: dt
        });
    }).catch( err => {
        res.status(500).json({
            message: 'Handel GET request for corporates. Has error',
            data: err
        });
    }).finally(() => {
        client.close();
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