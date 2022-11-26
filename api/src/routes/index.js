const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const payMethodRouter = require(`./payMethodRouter`)
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/paymethods', payMethodRouter)

module.exports = router;
