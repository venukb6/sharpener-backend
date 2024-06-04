const express = require('express')
const contactusController = require('../controllers/contact-us')

const router = express.Router()

router.get('/contact-us', contactusController.getContactUs)




module.exports = router