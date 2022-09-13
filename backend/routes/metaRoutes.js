const express = require('express')
const router = express.Router()
const { getMetas, setMeta, updateMeta, deleteMeta } = require('../controllers/metaController')

router.route('/').get(getMetas).post(setMeta)
router.route('/:id').put(updateMeta).delete(deleteMeta)

module.exports = router