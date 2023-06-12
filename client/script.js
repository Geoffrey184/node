// Récupération de la référence vers le bouton et la liste des articles
const fetchArticlesButton = document.getElementById('fetch-articles-button');
const articlesList = document.getElementById('articles-list');

// Gestionnaire d'événement pour le clic sur le bouton
fetchArticlesButton.addEventListener('click', () => {
  fetch('/articles') // Envoie une requête GET au serveur
    .then(response => response.json()) // Récupère la réponse JSON
    .then(articles => {
      // Affiche les articles dans la liste
      articles.forEach(article => {
        const li = document.createElement('li');
        li.textContent = article.title;
        articlesList.appendChild(li);
      });
    })
    .catch(error => console.log(error));
});
