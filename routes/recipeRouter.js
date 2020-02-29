const express = require('express');
const bodyParser = require('body-parser');
const Recipe = require('../models/recipe');

const recipeRouter = express.Router();

recipeRouter.use(bodyParser.json());

recipeRouter.route('/recipes')
.get((req, res, next) => {
    Recipe.find()
    .then(recipes => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(recipes);
    })
    .catch(err => next(err));
})
.post( (req, res, next) => {
    Recipe.create(req.body)
    .then(recipe => {
        console.log('Recipe Created ', recipe);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(recipe);
    })
    .catch(err => next(err));
})
.put( (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /recipes');
})


// recipeRouter.route('./recipes/:recipeId')
// .get((req, res, next) => {
//     Recipe.findById(req.params.recipeId)
//     .then(recipe => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(recipe);
//     })
//     .catch(err => next(err));
// })
// .put( (req, res, next) => {
//     Recipe.findByIdAndUpdate(req.params.recipeId, {
//         $set: req.body
//     }, { new: true })
//     .then(recipe => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(recipe);
//     })
//     .catch(err => next(err));
// })
// .delete((req, res, next) => {
//     Recipe.findByIdAndDelete(req.params.recipeId)
//     .then(response => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(response);
//     })
//     .catch(err => next(err));
// });


recipeRouter.route('/recipes/:recipeId')
.get( (req, res)=> {
    Recipe.findById(req.params.recipeId)
    .then(recipe => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(recipe);
    })
  })
  .put( (req, res, next) => {
    Recipe.findByIdAndUpdate(req.params.recipeId, {
        $set: req.body
    }, { new: true })
    .then(recipe => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(recipe);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Recipe.findByIdAndDelete(req.params.recipeId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = recipeRouter;