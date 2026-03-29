const pool = require("../config/db");
const { verifyRowsLength } = require("../utils/verifyRowsLength");

const getAllUsers = async (req, res, next) => {
    try {
        const result = await pool.query(`
            SELECT 
            users.id, users.name, users.email,
            grades.grade1, grades.grade2, grades.average,
            grades.total_classes, grades.absences, grades.attendance
            FROM users
            LEFT JOIN grades ON grades.user_id = users.id
            ORDER BY users.name ASC
        `)

        res.status(200).json(result.rows);
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            'SELECT id, name, email FROM users WHERE id = $1',
            [id]
        );

        if (verifyRowsLength(result.rows, res, 404, "Usuário não encontrado")) return;

        res.status(200).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const result = await pool.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email',
            [name, email, id]
        );

        if (verifyRowsLength(result.rows, res, 404, "Usuário não encontrado"));

        res.status(200).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            'DELETE FROM users WHERE id = $1 RETURNING id',
            [id]
        );

        if (verifyRowsLength(result.rows, res, 404, "Usuário não encontrado"));

        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}