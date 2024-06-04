const path = require('path')

const rootDir = require('../utils/path')


exports.getContactUs = (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
}