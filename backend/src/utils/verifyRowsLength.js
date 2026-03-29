const verifyRowsLength = (rows, res, status, message) => {
    if (rows.length === 0) {
        res.status(status).json({ message });
        return true
    }
    return false;
}

module.exports = { verifyRowsLength }