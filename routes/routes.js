const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post plant Method
router.post('/plant/post', async (req, res) => {
    const data = new Model.Plant({
        id: req.body.id,
        name: req.body.name,
        blooming: req.body.blooming,
        requiredHumidity: req.body.requiredHumidity,
        difficulty: req.body.difficulty,
        requiredExposure: req.body.requiredExposure,
        requiredTemperature: req.body.requiredTemperature,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all plants Method
router.get('/plant/', async (req, res) => {
    try {
        const data = await Model.Plant.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get plant by ID Method
router.get('/plant/:id', async (req, res) => {
    try {
        const data = await Model.Plant.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update plant by ID Method
router.patch('/plant/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.Plant.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete plant by ID Method
router.delete('/plant/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.Plant.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all rooms Method
router.get('/room/', async (req, res) => {
    try {
        const data = await Model.Room.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post room Method
router.post('/room/post', async (req, res) => {
    const data = new Model.Room({
        id: req.body.id,
        name: req.body.name,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all categories Method
router.get('/category/', async (req, res) => {
    try {
        const data = await Model.Category.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post category Method
router.post('/category/post', async (req, res) => {
    const data = new Model.Category({
        id: req.body.id,
        name: req.body.name,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;