function login(email, password) {
    if (!email.includes("@")) {
        return "Email invalide";
    }
    // Simuler une vérification
    if (password === "admin") {
        return "Connexion réussie";
    }
    return "Échec de connexion";
}
module.exports = { login };
