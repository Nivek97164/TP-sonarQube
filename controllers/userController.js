const { isValidEmail } = require("../utils");

function register(user) {
    if (!isValidEmail(user.email)) {
        return "Erreur : email invalide.";
    }
    // Enregistrer l'utilisateur (simulation)
    return "Utilisateur enregistré avec succès.";
}
module.exports = { register };
