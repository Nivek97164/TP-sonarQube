# TP SonarQube – Analyse et Qualité du Code

## 🎯 Objectif

Ce TP avait pour but d'analyser un projet Node.js à l'aide de SonarQube afin d’identifier les éventuels problèmes de code (code smells, duplications, bugs, sécurité).

---

## 🧱 Structure du projet

```bash
tp_sonarqube_simple/
├── app.js
├── auth.js
├── controllers/
│   └── userController.js
├── utils.js
└── sonar-project.properties
```

---

## ⚙️ Analyse avec SonarQube

### Étapes réalisées :

1. Téléchargement de SonarQube Community Edition
2. Lancement avec :
   ```bash
   ./bin/macosx-universal-64/sonar.sh start
   ```
3. Création manuelle du projet `tp_sonarqube`
4. Génération du token d’analyse
5. Configuration du fichier `sonar-project.properties` :
   ```properties
   sonar.projectKey=tp_sonarqube
   sonar.sources=.
   sonar.host.url=http://localhost:9000
   sonar.token=xxxxxxxxxxxxxxxxxxxxxxxx
   ```

6. Lancement de l’analyse avec :
   ```bash
   sonar-scanner
   ```

---

## 📝 Résultats de l’analyse

L’analyse SonarQube a permis de détecter les points suivants :

- 🔹 Code simpliste sans duplication
- ✅ Pas de bug critique détecté
- 🔒 Aucun mot de passe stocké en clair

---

## ✅ Exemple de correction

### Avant :
```js
function login(email, password) {
    if (password === "admin") return "OK";
    return "KO";
}
```

### Après :
```js
function login(email, password) {
    if (!email.includes("@")) return "Email invalide";
    if (password === "admin") return "Connexion réussie";
    return "Échec de connexion";
}
```

---

## 🧪 Tests

```bash
node app.js
# Connexion réussie
# Utilisateur enregistré avec succès
```

---

## 🚀 Conclusion

Ce TP m’a permis de comprendre le fonctionnement de SonarQube, de créer une configuration minimale et d’automatiser l’analyse de qualité du code. L’approche “Clean As You Code” est utile pour maintenir un projet propre dès le départ.

---

## 👤 Auteur

Kevin Bernard – MyDigitalSchool

