const authorizeOwner = (req, res, next) => {
    const tokenId = req.user.id;
    const paramsId = parseInt(req.params.id);

    if (req.user.role === "admin") {
        return next();
    }

    if (tokenId !== paramsId) {
        return res.status(403).json({ message: "Acesso negado" });
    }

    next();
}

module.exports = { authorizeOwner };