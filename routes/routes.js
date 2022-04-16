const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post plant method
router.post('/plants', async (req, res) => {
    const data = new Model.Plant({
        name: req.body.name,
        blooming: req.body.blooming,
        required_humidity: req.body.required_humidity,
        difficulty: req.body.difficulty,
        required_exposure: req.body.required_exposure,
        required_temperature: req.body.required_temperature,
        last_fertilized: req.body.last_fertilized,
        last_watered: req.body.last_watered,
        category: req.body.category,
        category_slug: req.body.category_slug,
        room: req.body.room,
        fertilizing_interval: req.body.fertilizing_interval,
        watering_interval: req.body.watering_interval,
        id: req.body.id,
        url: req.body.url,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all plants method
router.get('/plants/', async (req, res) => {
    try {
        const data = await Model.Plant.find({}, { _id: 0, __v: 0 });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get plant by ID method
router.get('/plants/:id', async (req, res) => {
    try {
        const data = await Model.Plant.find({ id: req.params.id}, { _id: 0, __v: 0 });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update plant by ID method
router.patch('/plants/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const result = await Model.Plant.find({ id }, { _id: 0, __v: 0 }).update(updatedData);

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete plant by ID method
router.delete('/plants/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.Plant.deleteOne({ id });
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all rooms method
router.get('/rooms/', async (req, res) => {
    try {
        const data = await Model.Room.find({}, { _id: 0, __v: 0 });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post room method
router.post('/rooms', async (req, res) => {
    const data = new Model.Room({
        name: req.body.name,
        id: req.body.id,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all categories method
router.get('/categories/', async (req, res) => {
    try {
        const data = await Model.Category.find({}, { _id: 0, __v: 0 });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post category method
router.post('/categories/', async (req, res) => {
    const data = new Model.Category({
        name: req.body.name,
        id: req.body.id,
        slug: req.body.slug
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//authentication method
router.post('/api-token-auth/', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!(username && password)) {
            res.status(400).send("All input is required");
        }

        if (username === 'admin' && password === 'admin123') {
            const responseObj = {
                username,
                password,
                token: 'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9lIENvZGVyIn0.5dlp7GmziL2QS06sZgK4mtaqv0_xX4oFUuTDh1zHK4U'
            };

            res.json(responseObj);
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;