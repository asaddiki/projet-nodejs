const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Route GET /articles
router.get('/', (req, res) => {
  // Code pour récupérer les articles depuis la base de données
  res.json({ message: 'Get all articles' });
});

// Route GET /articles/:id
router.get('/:id', (req, res) => {
  // Code pour récupérer un article spécifique depuis la base de données
  const { id } = req.params;
  res.json({ message: `Get article with ID ${id}` });
});

// Route POST /articles
router.post('/', (req, res) => {
  // Code pour ajouter un nouvel article à la base de données
  const article = req.body;
  res.json({ message: 'Add new article', article });
});

// Route PATCH /articles/:id
router.patch('/:id', (req, res) => {
  // Code pour mettre à jour un article existant dans la base de données
  const { id } = req.params;
  const updatedArticle = req.body;
  res.json({ message: `Update article with ID ${id}`, updatedArticle });
});

// Route DELETE /articles/:id
router.delete('/:id', (req, res) => {
  // Code pour supprimer un article existant de la base de données
  const { id } = req.params;
  res.json({ message: `Delete article with ID ${id}` });
});

module.exports = router;