const express = require('express');
const cors = require('cors')
const app = express();

//Vistas
const postUser = require('./view/postUser')
const getUser = require('./view/getUser')

//Middleware
app.use(express.json())
app.use(cors())

let serverStart = async () => {
      app.listen(3001, () => {
        console.log(
          "Bienvenido al servidor de Viveros Luka"
        );
      });
  };
  

serverStart()

getUser(app)
postUser(app)