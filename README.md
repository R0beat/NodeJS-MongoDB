# CRUD CON MONGODB Y NODEJS

# Iniciamos el proyecto 

```
npm init
```
# Instalamos los siguientes modulos

* _express_ es un framework en NodeJS
* _mongooes_ nos permitira conectar express con mongodb y nos permitirá modelar los datos
* _ejs_ motor de plantilla JS
* _morgan_ Es un middleware para la captura de solicitudes HTTP para Node.js para su posterior registro y seguimiento

_¿Que es un Middleware?_
El middleware es un software o conjunto de componentes desarrollados que sirven para integrar aplicaciones

```
npm install express mongooes ejs morgan
```
 _Para evitar reiniciar el servidor en cada momento_

Instalara en el el proyecto por separado
 ```
npm i nodemon -D

 ```

 
 ## Cuando trabajamos con MongoDB _no necesitamos crear la bd para poder utilizarla si no existe MongoDB la creara_
 ```javascript
 //Para conectar la BD utilizamos promesas
 //Las Promesas son funciones que se ejecutan cuando pasa determinado evento
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB Connected'))
    .catch(err =>console.log(err));;
 ```
