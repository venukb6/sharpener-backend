const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    const url = req.url
    const method = req.method

    if (url === '/'){
        let msg = ''
        fs.readFile('message1.txt', 'utf8', (err, data) =>{
            msg = data
            res.write('<html>')
            res.write('<head><title>Enter Message</title></head>')
            res.write('<body>')
            res.write(`<h1>${msg}</h1>`)
            res.write('<form action="/message1" method="POST"><input type="text" name="message1"/><button type="submit">Send</button></form>')
            res.write('</body>')
            res.write('</html>')
            return res.end()
        })
        
    }

    if (url === '/message1' && method === 'POST'){
        const body = []
        req.on('data', (chunck)=>{
            console.log(chunck)
            body.push(chunck)
        })
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('message1.txt', message, err => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
            
        })
    }
})


server.listen(3000)