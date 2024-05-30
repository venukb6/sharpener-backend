const http = require('http')

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to my node js project</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)