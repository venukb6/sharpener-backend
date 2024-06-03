const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="product name"><input type="text" name="size" placeholder="product size"><button type="submit">Add Product</button></form>')
})

router.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router
