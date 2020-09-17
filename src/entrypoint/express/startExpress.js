const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


module.exports = function startExpress() {

    const app = express()
    
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    consign().include('./src/entrypoint/express/routes').into(app)
    
    
    
    const PORT = 3000
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
}

