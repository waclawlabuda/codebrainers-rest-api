const mongoose = require('mongoose');

const plantDataSchema = new mongoose.Schema({
    requiredTemperature: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    requiredExposure: {
        required: true,
        type: String
    },
    lastFertilized: {
        required: false,
        type: String
    },
    lastWatered: {
        required: false,
        type: String
    },
    category: {
        required: false,
        type: Number
    },
    difficulty: {
        required: true,
        type: Number
    },
    requiredHumidity: {
        required: true,
        type: String
    },
    blooming: {
        required: true,
        type: Boolean
    },
    room: {
        required: false,
        type: Number
    }
})

const categoryDataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: String
    }
})

const roomDataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: String
    }
})

const Room = mongoose.model('Room', roomDataSchema);
const Category = mongoose.model('Category', categoryDataSchema);
const Plant = mongoose.model('Plant', plantDataSchema);

// Exporting our model objects
module.exports = {
    Room, Category, Plant
}