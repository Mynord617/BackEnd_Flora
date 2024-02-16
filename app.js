const express = require('express');
const app = express();
const db =  require('./database');
const producto = require('./router/productoRouter')

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public'))

app.use('/productos',producto)

const login = require('./router/login')
const registro = require('./router/registro')
app.use(login)
app.use(registro)

app.listen(3000, ()=> {
console.log('Servidor encendido');
})


/*


*/