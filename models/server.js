const express = require('express');
const cors = require('cors')
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;


        // midelwares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        // Cors
        this.app.use( cors());

        // Lectura y parese del body
        this.app.use( express.json() );

        // Directorio public
        this.app.use( express.static('public') );
        
    }

    routes(){

        this.app.use('/api/usuarios',require('../routes/usuarios'))
        
    }
    
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${this.port}`);
        });
    }
}

module.exports = Server;