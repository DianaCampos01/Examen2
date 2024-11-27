import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    duracionHoras: {
        type: Number,
        required: true
    },
    nivel: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: false
    }
});


const Cursos = mongoose.model('Cursos', cursoSchema)

export default Cursos