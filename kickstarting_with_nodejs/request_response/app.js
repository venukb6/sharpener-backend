const http = require('http')

const server = http.createServer((req, res)=>{
    const url = req.url
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome to my node js project</h1></body>')
        res.write('</html>')
        return res.end()
    }
    
    if(url === '/home'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Home Page</title></head>')
        res.write('<body><h1>Welcome to home page</h1></body>')
        res.write('</html>')
        return res.end()
    }
    
    if(url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>About Page</title></head>')
        res.write('<body><h1>Welcome to about page</h1></body>')
        res.write('</html>')
        return res.end()
    }
    
    if(url === '/node'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Node Project Page</title></head>')
        res.write('<body><h1>Welcome to my node js project</h1></body>')
        res.write('</html>')
        return res.end()
    }
    
})

server.listen(3000)