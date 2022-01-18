const express = require('express');

require('dotenv').config();

const cors = require('cors');


class Server  {


    constructor(){
        this.app = express();
        this.port = "5050";
        this.path = {
            email:'/api/email',
        }


    
        
        //MIDDLEWARES
        this.middlewares();

        //ROUTER
        this.router();

        
       
    }



    middlewares(){
        this.app.use(cors());

        this.app.use(express.static('public'));

        //lectura y parseo del body
        this.app.use(express.json());


    }

    router(){

        //USERS   
        this.app.use(this.path.email, require('./routers/email'));


    }

    listenStart(){
        this.app.listen(this.port, () => {
            console.log(`Esta en el puerto ${this.port}`)
        });
    }
}




module.exports = Server;