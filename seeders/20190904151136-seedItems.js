'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
      //
      // Example:

      const arrayOfItems = [
          'Milk',
          'Eggs',
          'Bread',
          'Kosher Salt',
          'Salt',
          'Pepper',
          'Olive oil',
          'Vegetable oil',
          'Apple Cider Vinegar',
          'Red Wine Vinegar',
          'Balsamic Vinegar',
          'Rice Vinegar',
          'Flour',
          'Baking Soda',
          'Baking Powder',
          'Cream of Tartar',
          'Cocoa Powder',
          'Chocolate Chips',
          'Evvaporated Milk',
          'Vanilla Extract',
          'Sugar',
          'Confectioner Sugar',
          'Brown sugar',
          'Maple syrup',
          'Honey',
          'Agave Syrup',
          'Coffee',
          'Tea',
          'White Rice',
          'Brown Rice',
          'Pasta',
          'Polenta',
          'Breadcrumbs',
          'Crackers',
          'Tortillas',
          'Peanut Butter',
          'Applesause',
          'Oats',
          'Chicken Broth',
          'Black Beans',
          'Beans',
          'Olives',
          'Salsa',
          'Tomatoes',
          'Tomato Paste',
          'Red Peppers',
          'Bay Leaves',
          'Cajun seasoning',
          'Cayenne Pepper',
          'Chili Powder',
          'Crushed Red Pepper',
          'Curry Powder',
          'Fennel',
          'Cinnamon',
          'Cloves',
          'Cumin',
          'Ginger',
          'Oragano',
          'Paprika',
          'Rosemary',
          'Sesame Seeds',
          'Thyme',
          'Nutmeg',
          'Milk',
          'Greek Yogurt',
          'Butter',
          'Cheddar Cheese',
          'Mozzarella Cheese',
          'Goat Cheese',
          'Parmesan',
          'Eggs',
          'Avacados',
          'Carrots',
          'Celery',
          'Broccoli',
          'Cauliflower',
          'Bell Pepper',
          'Spinach',
          'Kale',
          'Romaine Lettuce',
          'Scallion',
          'Gingerroot',
          'White Potatoe',
          'Sweet Potatoe',
          'Onion',
          'Garlic',
          'Lemons',
          'Limes',
          'Apples',
          'Bananas',
          'Jelly',
          'Jam',
          'Ketchup',
          'Mayonnaise',
          'Mustard',
          'Pickles',
          'Hot Sause',
          'Worcestershire Sauce',
          'Soy Sauce',
          'Fish Sauce',
          'Sesame Oil',
          'Ground Beef',
          'Chicken Breast',
          'Bacon',
          'Bread',
          'Vanilla Ice Cream',
          'Pizza Dough',
          'Pie Crust'
          ]



          let items = [];

          for (let i = 0; i < arrayOfItems.length; i++) {
            let date = new Date();
            items.push({
              id: i,
              itemName: arrayOfItems[i],
              createdAt: date,
              updatedAt: date
            })
          }
          return queryInterface.bulkInsert('items', items, {});

        },

        down: (queryInterface, Sequelize) => {
          /*
            Add reverting commands here.
            Return a promise to correctly handle asynchronicity.

            Example:
            return queryInterface.bulkDelete('People', null, {});
          */
        }
    };
