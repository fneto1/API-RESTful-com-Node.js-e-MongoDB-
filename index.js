//configurações iniciais
const express = require("express")
const app = express()
const mongoose = require("mongoose")



//forma de ler json / middlewares
//ler json
app.use(
    express.urlencoded({
        extended: true
    })
)

//enviar json
app.use(express.json())

//rotas da api
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req

    res.json({message: 'Oi, Express!'}) //estou enviando a resposta em json
})


//entregar uma porta 
mongoose.connect('mongodb+srv://root:root@apicluster.r6lekxx.mongodb.net/bancodaapi?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectamos ao mongoDB');
    app.listen(3000)
})
.catch((err) => console.log(err))
