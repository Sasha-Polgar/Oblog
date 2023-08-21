/*============================
* Import des modules
*==============================*/
const express = require("express");
const dataArticles = require("./data/articles.json")

/*============================
* Configuration d'express
*==============================*/
const app = express();
const port = 3000;
// - le moteur de rendu EJS
app.set("view engine", "ejs");
// - dossier dans lequel trouver les vues
app.set("views", "integration");

app.use(express.static("static"));


/*============================
* Définitions des routes
*==============================*/

// app.get("/",(req, res) => {  
//     res.sendFile("/var/www/html/S03/s03-PARCOURS-OBlog-Sasha-Polgar/integration/index.html");
// });


app.get("/",(req, res) => {  
    res.render("index",{articles:dataArticles});
});









/*============================
* Lancement du serveur
*==============================*/

app.listen(port, () => {
    console.log(`Votre serveur tourne sur le port ${port}`);
  }); 
