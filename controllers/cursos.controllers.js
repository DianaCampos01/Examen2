import mongoose from "mongoose";
import Cursos from "../modules/Cursos.model.js.js";


export const getAllCursos = async (req, res) =>{
    console.log('Mostrando toda la lista de productos'.grey)
    try {
        const cursos = await Cursos.find({},{_v:0})
        if(cursos.length === 0){
            return res.status(404).json({
                msg:'No hay elementos dentro de la lista'
            })
        }

        return res.status(200).json({
            cursos
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const getIdCurso = async (req, res) => {
    console.log('Trayendo los elementos por id'.grey)
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: 'Id no falido'
            })
        }

        const cursos = await Cursos.findById(id);
        if(!cursos){
            return res.status(404).json({
                error: 'No se ha encontrado elementos con ese id'
            })
        }

        return res.status(200).json({
            cursos
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const postCurso = async(req, res) => {
    console.log('Agregando elementos a la base de datos'.grey)

    const body = req.body
    const newCurso = new Cursos(body)
    try {
        const validarError = newCurso.validateSync();
        if(validarError){
            const errorMesage = Object.values(validarError.errors).map(error => error.message)
            return res.status(404).json({
                errorMesage
            })
        }

        await newCurso.save();
        return res.status(200).json({
            msg: 'Se ha agregado nuevo elemento',
            newCurso
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const putCurso = async(req, res) => {
    console.log('Actualizando elemento'.blue)
    const body = req.body
    const id = req.params.id
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: 'Id no falido'
            })
        }
        const curso = await Cursos.findByIdAndUpdate(id, body, {new:true, runValidators:true})
        if(!curso){
            return res.status(404).json({
                error: 'No se ha encontrado elementos con ese id'
            })
        }
        return res.status(200).json({
            msg: 'Elemento actualizado',
            curso
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const deleteCurso = async(req, res) =>{
    console.log('Eliminando elemento')
    const id = req.params.id

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: 'Id no falido'
            })
        }

        const deleteElement = await Cursos.findByIdAndDelete(id)

        if(!deleteElement){
            return res.status(404).json({
                error: 'No se ha encontrado elementos con ese id'
            })
        }

        return res.status(200).json({
            msg: 'Elemento eliminado',
            deleteElement
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}