const asyncHandler = require('express-async-handler')
const Meta = require('../models/metaModel')
//Desc: Obtener todas las metas
//Ruta: GET /api/metas
//Access Privado
const getMetas = asyncHandler(async (req, res) => {
    const metas = await Meta.find()
    res.status(200).json(metas)
})

//Desc: Crear Meta
//Ruta: POST /api/metas
//Access Privado
const setMeta = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Por favor agregue un texto a el campo')
    }
    const meta = await Meta.create({
        text: req.body.text,
    })
    res.status(200).json(meta)
})

//Desc: Actualizar Meta
//Ruta: PUT /api/metas/:id
//Access Privado
const updateMeta = asyncHandler(async (req, res) => {
    const meta = await Meta.findById(req.params.id)
    if (!meta) {
        res.status(400)
        throw new Error('Meta no encontrada')
    }
    const updatedMeta = await Meta.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    // El new es para que lo cree en caso de que no exista
    res.status(200).json(updatedMeta)
})

//Desc: Eliminar Meta
//Ruta: DELETE /api/metas/:id
//Access Privado
const deleteMeta = asyncHandler(async (req, res) => {
    const meta = await Meta.findById(req.params.id)
    if (!meta) {
        res.status(400)
        throw new Error('Meta no encontrada')
    }
    await meta.remove()

    // El new es para que lo cree en caso de que no exista
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getMetas, setMeta, updateMeta, deleteMeta
}