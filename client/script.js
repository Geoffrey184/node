// Récupération de la référence vers le bouton et la liste des articles
const fetchArticlesButton = document.getElementById('fetch-articles-button');
const articlesList = document.getElementById('articles-list');
let i = 0;
const article = document.getElementById('art');

// Gestionnaire d'événement pour le clic sur le bouton
fetchArticlesButton.addEventListener('click', () => {

  i++;
  console.log(i);
  if (i == 1) {
  fetch('http://localhost:3000/') // Envoie une requête GET au serveur
    .then(response => response.json()) // Récupère la réponse JSON
    .then(articles => {
      console.log(articles)
     // Crée un conteneur pour les articles
     const articlesContainer = document.createElement('div');
     articlesContainer.classList.add('articles-container');

     // Parcourt les articles et affiche-les
     articles.forEach(article => {
       const articleElement = document.createElement('div');
       articleElement.classList.add('article');

       const titleElement = document.createElement('h3');
       titleElement.textContent = article.title;
       articleElement.appendChild(titleElement);

       const descriptionElement = document.createElement('p');
       descriptionElement.textContent = article.description;
       articleElement.appendChild(descriptionElement);

       const authorElement = document.createElement('p');
       authorElement.textContent = `Auteur : ${article.author}`;
       articleElement.appendChild(authorElement);

       articlesContainer.appendChild(articleElement);

       console.log(article)
     });

     // Efface le contenu précédent de la section des articles
     

     // Ajoute le conteneur des articles à la section des articles
     article.appendChild(articlesContainer);
   })
   .catch(error => console.log(error));
  }
});
