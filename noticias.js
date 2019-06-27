const http = require('http')

http.createServer(function(req, res){
    let categoria = req.url

    if(categoria === '/tecnologia'){
        res.end('<html><body>Portal de tecnologia</body></html>')
    }else if(categoria === '/moda'){
        res.end('<html></body>Portal de Moda</body></html>')
    }else if(categoria === '/beleza'){

    }else{
        res.end('>html><body>Portal dee noticias</body></html>')
    }
}).listen(3000)