//Importer express
const express = require('express');

//Importer la méthode Router d'express pour importer les routes
const router = express.Router();

//Importer multer
const multer = require('../middleware/multer-config');

//Importer le fichier sauce.controller.js
const msgCtrl = require('../controllers/msg.controller');


//POST : Envoyer des objets
router.post('/', multer, msgCtrl.createMsg);

//POST : Définit le statut « Like » pour l'userId fourni
//Si like = 1, l'utilisateur aime (= like) la sauce
//Si like = 0, l'utilisateur annule son like ou son dislike
//Si like = -1, l'utilisateur n'aime pas (=dislike) la sauce
router.post('/:id/like', msgCtrl.likeMsg);

//GET : Récupérer toutes les sauces 
router.get('/', msgCtrl.getAllMsg);

//GET : Récupérer une sauce spécifique
router.get('/:id', msgCtrl.getOneMsg);

//PUT : Modifier une sauce existante
router.put('/:id', multer, msgCtrl.modifyMsg);

//DELETE : Supprimer une sauce 
router.delete('/:id', msgCtrl.deleteMsg);

//Exporter le model de ce fichier
module.exports = router;