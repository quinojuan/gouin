const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const payMethodRouter = require(`./payMethodRouter`)
const customerRouter = require(`./customersRouter`)
const movementsRouter = require(`.//movementsRouter`)
const chequesRouter = require('./chequesRouter')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/paymethods', payMethodRouter)
router.use('/customers', customerRouter)
router.use('/movements', movementsRouter)
router.use('/cheques', chequesRouter)

module.exports = router;
