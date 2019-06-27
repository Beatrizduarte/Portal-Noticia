const app = require('./config/server')
//const rotaNoticia = require('./app/routes/noticias')(app);
//const rotaHome = require('./app/routes/home')(app)
//const rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app)

app.listen(3000, function(req, res){
    console.log('Servidor ON')
})