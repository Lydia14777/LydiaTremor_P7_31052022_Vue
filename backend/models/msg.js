//Démo : nom thing.js

//Importer mongoose
const mongoose = require('mongoose');

/*
//Créer un schéma de données des sauces avec la fonction Schema
const msgSchema = mongoose.Schema({ 
    //Passe des objets

    //L'identifiant MongoDB unique de l'utilisateur qui a créé la sauce
    userId: { type: String, required: true },
    //Nom de la sauce
    name: { type: String, required: true },
    //Fabricant de la sauce
    manufacturer: { type: String, required: true },
    //Description de la sauce
    description: { type: Number, required: true },
    //Le principal ingrédient épicé de la sauce
    mainPepper: { type: String, required: false },
    //L'URL de l'image de la sauce téléchargée par l'utilisateur
    imageUrl: { type: String, required: false },
    //Nombre entre 1 et 10 décrivant la sauce
    heat: { type: Number, required: true },
    //Nombre d'utilisateurs qui aiment (= likent) la sauce
    likes: { type: Number, required: false, default:0 },
    //Nombre d'utilisateurs qui n'aiment pas (= dislike) la sauce
    dislikes: { type: Number, required: false, default:0 },
    //Tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce
    usersLiked: { type: Number, required: false, default:'' },
    //Tableau des identifiants des utilisateurs qui n'ont pas aimé (= disliked) la sauce
    usersDisliked: { type: Number, required: false, default:'' },
    //Adresse e-mail de l'utilisateur [unique]
    email: { type: String, required: true },
    //Mot de passe de l'utilisateur haché
    password: { type: String, required: true },
});
*/

//La méthode model pour exporter ce schéma
module.exports = mongoose.model('msg', msgSchema);

