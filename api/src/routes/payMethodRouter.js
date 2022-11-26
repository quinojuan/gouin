const {Router} = require('express')
const router = Router()
//traemos los controllers que queremos
const{
    getPayMethod,
} = require(`../Controllers/PayMethodController.js`)

router.get('/', getPayMethod);

module.exports = router