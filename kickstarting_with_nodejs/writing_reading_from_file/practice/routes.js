const fs = require('fs')


const requestHandler = (req, res) =>{
    const url = req.url
    const method = req.method

    if (url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/message' && method === 'POST'){
        const body = []
        req.on('data', (chunck)=>{
            console.log(chunck)
            body.push(chunck)
        })
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[0]
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
            
        })
    }
}



module.exports = {
    handler: requestHandler, 
    someText: 'some hard coded text'
}


// module.exports = requestHandler

// module.exports.handler = requestHandler
// module.exports.someText = 'some hard coded text'



// exports.handler = requestHandler
// exports.someText = 'some hard coded text'