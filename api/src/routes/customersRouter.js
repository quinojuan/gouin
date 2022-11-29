const {Router} = require('express')
const router = Router()
//traemos los controllers que queremos
const{
    getCustomers,
    postCustomers,
    updateCustomer
} = require(`../Controllers/CustomersController`)

router.get('/', getCustomers);
router.post('/', postCustomers);
router.put('/:id', updateCustomer);

module.exports = router