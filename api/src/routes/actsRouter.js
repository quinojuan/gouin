const {Router} = require('express')
const router = Router()
//traemos los controllers que queremos
const{
    getActs,
} = require(`../Controllers/ActsController.js`)

router.get('/', getActs);

module.exports = router