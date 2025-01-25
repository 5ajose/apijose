const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: false
    },
    correo: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: false
    }
},{
    versionKey: false
}
)


module.exports = mongoose.model('users', userModel)

/*
{
"nombre":"jose",
"apellido": "Quinto Aguilar",
"correo": "jose@gmail.com",
"contrasena": "1234jose",
"direccion": "calle 100 # 9 - 90",
"roll": "administrador"
}
*/