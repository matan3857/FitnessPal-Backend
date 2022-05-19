const exerciseService = require('./exercise.service.js');
const logger = require('../../services/logger.service')

// GET LIST
// async function getExercises(req, res) {
//   try {
//     var queryParams = req.query;
//     const exercises = await exerciseService.query(JSON.parse(queryParams.params))
//     res.json(exercises);
//   } catch (err) {
//     logger.error('Failed to get exercises', err)
//     res.status(500).send({ err: 'Failed to get exercises' })
//   }
// }

// GET LIST exercises
async function getExercises(req, res) {
  try {
    const exercises = await exerciseService.query()
    res.json(exercises);
  } catch (err) {
    logger.error('Failed to get exercises', err)
    res.status(500).send({ err: 'Failed to get exercises' })
  }
}

// PUT (Update exercise type)
async function updateExercise(req, res) {
  try {
    const exerciseType = req.body;
    const updatedExerciseType = await exerciseService.update(exerciseType)
    res.json(updatedExerciseType)
  } catch (err) {
    logger.error('Failed to update exercise type', err)
    res.status(500).send({ err: 'Failed to update exercise type' })
  }
}


// GET BY ID 
async function getToyById(req, res) {
  try {
    const toyId = req.params.id;
    const toy = await toyService.getById(toyId)
    res.json(toy)
  } catch (err) {
    logger.error('Failed to get toy', err)
    res.status(500).send({ err: 'Failed to get toy' })
  }
}

// POST (add toy)
async function addToy(req, res) {
  try {
    const toy = req.body;
    const addedToy = await toyService.add(toy)
    res.json(addedToy)
  } catch (err) {
    logger.error('Failed to add toy', err)
    res.status(500).send({ err: 'Failed to add toy' })
  }
}

// DELETE (Remove car)
async function removeToy(req, res) {
  try {
    const toyId = req.params.id;
    const removedId = await toyService.remove(toyId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove toy', err)
    res.status(500).send({ err: 'Failed to remove toy' })
  }
}

module.exports = {
  getExercises,
  updateExercise,

  getToyById,
  addToy,
  removeToy
}
