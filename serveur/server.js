const express = require('express');
const app = express();
const articles = require('./data.json');

// Configuration pour servir les fichiers statiques
app.use(express.static('client'));


// Endpoint pour récupérer tous les articles
app.get('/articles', (req, res) => {
  res.json(articles);
});

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
