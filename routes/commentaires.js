const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Route GET /commentaires
router.get('/', (req, res) => {
  // Code pour récupérer les commentaires depuis la base de données
  res.json({ message: 'Get all commentaires' });
});

// Route GET /commentaires/:id
router.get('/:id', (req, res) => {
  // Code pour récupérer un commentaire spécifique depuis la base de données
  const { id } = req.params;
  res.json({ message: `Get commentaire with ID ${id}` });
});

// Route POST /commentaires
router.post('/', (req, res) => {
  // Code pour ajouter un nouveau commentaire à la base de données
  const commentaire = req.body;
  res.json({ message: 'Add new commentaire', commentaire });
});

// Route PATCH /commentaires/:id
router.patch('/:id', (req, res) => {
  // Code pour mettre à jour un commentaire existant dans la base de données
  const { id } = req.params;
  const updatedCommentaire = req.body;
  res.json({ message: `Update commentaire with ID ${id}`, updatedCommentaire });
});

// Route DELETE /commentaires/:id
router.delete('/:id', (req, res) => {
  // Code pour supprimer un commentaire existant de la base de données
  const { id } = req.params;
  res.json({ message: `Delete commentaire with ID ${id}` });
});

module.exports = router;