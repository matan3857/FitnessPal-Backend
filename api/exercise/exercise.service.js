const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy = null) {
    try {
        const collection = await dbService.getCollection('exercise')
        const exercises = await collection.find({}).toArray()
        return exercises
    } catch (err) {
        logger.error('cannot find exercises', err)
        throw err
    }
}
async function update(exerciseType) {
    try {
        var id = ObjectId(exerciseType._id)
        delete exerciseType._id
        const collection = await dbService.getCollection('exercise')
        await collection.updateOne({ "_id": id }, { $set: { ...exerciseType } })
        return exerciseType
    } catch (err) {
        logger.error(`cannot update exercise type ${exerciseType._id}`, err)
        throw err
    }
}


module.exports = {
    query,
    update,
}
