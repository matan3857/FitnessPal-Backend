const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getExercises, updateExercise } = require('./exercise.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getExercises)
router.put('/', updateExercise)
// router.put('/', requireAuth, requireAdmin, updateExercise)
router.delete('/:id', requireAuth, requireAdmin)

module.exports = router