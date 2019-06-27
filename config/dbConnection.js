const mysql = require('mysql') 

const connMySQL = function(){
    return mysql.createConnection({  
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'portal_noticias'
    }) 
}

module.exports = function(){
    return connMySQL; // evitara que a cara load do servidor, seja feito uma nova conexão com o banco
}