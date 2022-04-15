const mongoose = require('mongoose');

const plantDataSchema = new mongoose.Schema({
    required_temperature: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    required_exposure: {
        required: true,
        type: String
    },
    last_fertilized: {
        required: false,
        type: String
    },
    last_watered: {
        required: false,
        type: String
    },
    category: {
        required: false,
        type: Number
    },
    category_slug: {
        required: false,
        type: String
    },
    difficulty: {
        required: true,
        type: Number
    },
    required_humidity: {
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
    },
    fertilizing_interval: {
        required: true,
        type: Number
    },
    watering_interval: {
        required: true,
        type: Number
    },
    id: {
        required: true,
        type: Number
    },
    url: {
        required: false,
        type: String
    }
});

const categoryDataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: String
    },
    slug: {
        required: true,
        type: String
    }
});

const roomDataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: Number
    },
});

const Room = mongoose.model('Room', roomDataSchema);
const Category = mongoose.model('Category', categoryDataSchema);
const Plant = mongoose.model('Plant', plantDataSchema);

// Exporting our model objects
module.exports = {
    Room, Category, Plant
}