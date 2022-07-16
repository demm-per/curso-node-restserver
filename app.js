require('dotenv').config();
const Server = require('./models/server');
// const express = require('express');
// require('dotenv').config();
// app = express();

// app.get('/', ( req, res ) => {
//     res.send('hola mundo');
// });

// app.get('*',( req, res ) => {
//     res.send('no se encontro la pagina')
// })

// app.listen(process.env.PORT,()=>{
//     console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${process.env.PORT}`);
// });

const server = new Server();

server.listen();
