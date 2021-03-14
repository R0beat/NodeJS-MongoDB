const moongose = require('moongose');
//Definir como van a a lucir los datos
const Schema = moongose.Schema;

//Creamos un objeto con los campos que tendra cada tarea

const TaskSchema = new Schema({
    tittle : String,
    description : String,
    //Creamos un objeto será Boolean, le damos False por defecto
    status : {
        type : Boolean,
        default : false
    }
});
/*Para utilizarlo lo pasamos a un metodo(model)
Para cada coleccion TaskSchema se almacenara en una colección ´task'
Para poder utilizar este modulo en otros archiuvos lo exportamos-> module.expoirts 
*/
module.exports=moongose.model('task',TaskSchema);