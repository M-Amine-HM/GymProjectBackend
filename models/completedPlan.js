const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({
    'planName': {
        required: true,
        type: String
    },
    'userId': {
        required: true,
        type: String
    },
    'nbrExercises': {
        required: true,
        type: String
    },
    'time': {
        required: true,
        type: String
    },
    'currentTime': {
        required: true,
        type: String
    },
    'exercises': {
        type: [String],
        required: false
    },
    'nbrsSeries': {
        type: [String],
        required: false
    },
    'seriesCompleted': {
        type: [[[String]]], // Array of arrays of strings
        required: false
    }
});

module.exports = mongoose.model("Completedplans", dataSchema);
