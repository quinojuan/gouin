const {Router} = require('express')
const router = Router()
//traemos los controllers que queremos
const{
    getCheques,
    postCheque,
    //updateCheque
} = require(`../Controllers/ChequesController`)

router.get('/', getCheques);
router.post('/', postCheque);
//router.put('/:id', updateCheque);

module.exports = router