const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ingredientSchema = new Schema({
    quantity: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
}, {
    timestamps: true
});


const recipeSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    },
    favorite: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    ingredients:[ingredientSchema],
    steps:[{
        type: String
    }]
}, {
    timestamps: true
});


const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;