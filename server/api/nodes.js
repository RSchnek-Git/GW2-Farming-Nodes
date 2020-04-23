const router = require('express').Router();
const {Nodes} = require('../db/models')

router.get('/', async function(req, res, next){
    try {
        const nodes = await Nodes.findAll()
        res.json(nodes)
    } catch (error) {
        next(error)
    }
})

router.get('/iron', async function(req, res, next){
    try {
        const ironNodes = await Nodes.findAll({
            where: {
                oreType: "Iron"
            }
        })
        res.json(ironNodes)
    } catch (error) {
        next(error)
    }
})

router.get('/platinum', async function(req, res, next){
    try {
        const platNodes = await Nodes.findAll({
            where: {
                oreType: "Platinum"
            }
        })
        res.json(platNodes)
    } catch (error) {
        next(error)
    }
})

module.exports = router