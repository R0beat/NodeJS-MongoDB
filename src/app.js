// path->Para evitar problemas con directortios en Sistemas operativos
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//Connecting to BD
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB Connected'))
    .catch(err =>console.log(err));;

//  Importing Routes
const indexRoutes = require('./routes/index')

//  Settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.use(express.static('public'));
app.set('view engine','ejs');


//  Middelwares -> es una función que se ejecuta antes de que llegue a las rutas
app.use(morgan('dev'));
//Para el envio de formularios-> extended:false ->por que recibira textto y no imagenes
app.use(express.urlencoded({extended:false}));
//  Routes
app.use('/',indexRoutes);

//  Starting the server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});