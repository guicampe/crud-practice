const validateRegister = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
        return res.status(400).json({ message: "Nome inválido" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: "Email inválido" });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({ message: "Senha deve ter no mínimo 6 caracteres" });
    }

    next();
}

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: "Email inválido" });
    }

    if (!password) {
        return res.status(400).json({ message: "Senha obrigatória" });
    }

    next();
}

const validateUpdate = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
        return res.status(400).json({ message: "Nome inválido" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: "Email inválido" });
    }

    next();
}

module.exports = {
    validateRegister, 
    validateLogin,
    validateUpdate,
}