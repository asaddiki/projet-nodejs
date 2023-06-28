var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Route GET /users
router.get('/', (req, res) => {
  // Code pour récupérer les utilisateurs depuis la base de données
  res.json({ message: 'Get all users' });
});

// Route GET /users/:id
router.get('/:id', (req, res) => {
  // Code pour récupérer un utilisateur spécifique depuis la base de données
  const { id } = req.params;
  res.json({ message: `Get user with ID ${id}` });
});

// Route POST /users
router.post('/', (req, res) => {
  // Code pour ajouter un nouvel utilisateur à la base de données
  const user = req.body;
  res.json({ message: 'Add new user', user });
});

// Route PATCH /users/:id
router.patch('/:id', (req, res) => {
  // Code pour mettre à jour un utilisateur existant dans la base de données
  const { id } = req.params;
  const updatedUser = req.body;
  res.json({ message: `Update user with ID ${id}`, updatedUser });
});

// Route DELETE /users/:id
router.delete('/:id', (req, res) => {
  // Code pour supprimer un utilisateur existant de la base de données
  const { id } = req.params;
  res.json({ message: `Delete user with ID ${id}` });
});

module.exports = router;
