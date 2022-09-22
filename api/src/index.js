//Importcaiones de modulos necesarios para iniciar el server
const  express  = require("express");
const cors = require("cors");
const app = express();

//Instancias de las importaciones ejecutadas
app.use(express.json());
app.use(cors());
const PORT = 4000;

//Inicializacion del server
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});



//Primera ruta creada de tipo GET
app.get("/", (req, res) => {
    res.status(200).send("Hola estoy corriendo en el puerto 4000")
})
