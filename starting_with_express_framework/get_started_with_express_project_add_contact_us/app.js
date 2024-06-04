const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactUsRoutes = require('./routes/contactUs')
const successrRoutes = require('./routes/success')
const errRoutes = require('./routes/error')


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(contactUsRoutes)
app.use(successrRoutes)
app.use(errRoutes)





app.listen(3000);