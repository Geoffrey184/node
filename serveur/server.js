const express = require('express');
const {readFileSync} = require('fs');
const cors = require('cors');
const app = express();
const articles = require('./data.json');
app.use(cors());

// Configuration pour servir les fichiers statiques
app.use(express.static('client'));


// Endpoint pour récupérer tous les articles
app.get('/', (req, res) => {
  res.send(readFileSync('./data.json', 'utf8'));
});

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
