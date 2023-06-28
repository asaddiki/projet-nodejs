const { PrismaClient } = require('@prisma/client');
const faker = require('faker');

const prisma = new PrismaClient();

(async () => {
  try {
        // Supprimer toutes les données existantes
    await prisma.article.deleteMany();
    await prisma.commentaire.deleteMany();
    await prisma.utilisateur.deleteMany();
    await prisma.categorie.deleteMany();

    // Insérer des données pour l'entité Utilisateur
    const utilisateurs = Array.from({ length: 10 }).map((_, index) => ({
      nom: faker.name.findName(),
      email: `user${index + 1}@example.com`,
      password: 'password',
      role: 'AUTHOR'
    }));

    utilisateurs.push({
      nom: 'Admin User',
      email: 'admin@example.com',
      password: 'password',
      role: 'ADMIN'
    });

  const createdUtilisateurs = [];
for (const utilisateur of utilisateurs) {
  const createdUtilisateur = await prisma.utilisateur.create({
    data: utilisateur
  });
  createdUtilisateurs.push(createdUtilisateur);
}
    console.log('Utilisateurs créés :', createdUtilisateurs);

    // Insérer des données pour l'entité Catégorie
    const categories = Array.from({ length: 10 }).map((_, index) => ({
      nom: `Catégorie ${index + 1}`
    }));

    const createdCategories = [];
    for (const categorie of categories) {
      const createdCategorie = await prisma.categorie.create({
        data: categorie
      });
      createdCategories.push(createdCategorie);
    }

    console.log('Catégories créées :', createdCategories);


    // Insérer des données pour l'entité Article
    const articles = [];
    for (let i = 0; i < 100; i++) {
      const nbCategories = faker.datatype.number({ min: 1, max: 4 });
      const categoriesIds = faker.random.arrayElements(
        createdCategories.map((categorie) => categorie.id),
        nbCategories
      );

     const authors = createdUtilisateurs.filter((utilisateur) => utilisateur.role === 'AUTHOR');
const author = faker.random.arrayElement(authors);

      const createdArticle = await prisma.article.create({
        data: {
          titre: faker.lorem.sentence(),
          contenu: faker.lorem.paragraphs(),
          image: faker.image.imageUrl(),
          published: true,
          auteur: {
            connect: {
              id: author.id
            }
          },
          categories: {
            connect: categoriesIds.map((categoryId) => ({ id: categoryId }))
          }
        }
      });

      articles.push(createdArticle);
    }

    console.log('Articles créés :', articles);

// Insérer des données pour l'entité Commentaire
for (const article of articles) {
      const nbCommentaires = faker.datatype.number({ min: 0, max: 20 });
      const commentaires = Array.from({ length: nbCommentaires }).map(() => ({
        contenu: faker.lorem.paragraph(),
        email: faker.internet.email(),
        articleId: article.id
      }));
      
      await prisma.commentaire.createMany({
        data: commentaires,
        skipDuplicates: true 
      });      
    }

    console.log('Commentaires créés avec succès.');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données de test :', error);
  } finally {
    await prisma.$disconnect();
  }
})();
