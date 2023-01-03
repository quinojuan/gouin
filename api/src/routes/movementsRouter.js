const {Router} = require('express')
const router = Router()
//traemos los controllers que queremos
const{
    getMovements,
    postMovements,
    updateMovement
} = require(`../Controllers/MovementsController`)

router.get('/', getMovements);
router.post('/', postMovements);
router.put('/:id', updateMovement);

module.exports = router