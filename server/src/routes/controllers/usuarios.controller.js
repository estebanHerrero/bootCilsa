import {pool} from '../../db.js'

export const getUsuarios = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM usuarios')
    res.json(rows)
}

export const createUsuario = (req, res) => res.send('creando usuario')
export const updateUsuario = (req, res) => res.send('actualizando usuarios')
export const deleteUsuario = (req, res) => res.send('eliminando usuarios')