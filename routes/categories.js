const express = require('express');
const router = express.Router();

// Route GET /categories
router.get('/', (req, res) => {
  // Code pour récupérer les catégories depuis la base de données
  res.json({ message: 'Get all categories' });
});

// Route GET /categories/:id
router.get('/:id', (req, res) => {
  // Code pour récupérer une catégorie spécifique depuis la base de données
  const { id } = req.params;
  res.json({ message: `Get category with ID ${id}` });
});

// Route POST /categories
router.post('/', (req, res) => {
  // Code pour ajouter une nouvelle catégorie à la base de données
  const category = req.body;
  res.json({ message: 'Add new category', category });
});

// Route PATCH /categories/:id
router.patch('/:id', (req, res) => {
  // Code pour mettre à jour une catégorie existante dans la base de données
  const { id } = req.params;
  const updatedCategory = req.body;
  res.json({ message: `Update category with ID ${id}`, updatedCategory });
});

// Route DELETE /categories/:id
router.delete('/:id', (req, res) => {
  // Code pour supprimer une catégorie existante de la base de données
  const { id } = req.params;
  res.json({ message: `Delete category with ID ${id}` });
});

module.exports = router;