'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('courses', [{
      title: 'Antes de ti',
      description: 'genero romantico',
      weeks: 4,
      enroll_cost: 70,
      minimum_skill: 'Avanzado',
      bootcamp_id: 1
    },
    {
      title: 'las 48 leyes del poder',
      description: 'misterio y manipulación',
      weeks: 7,
      enroll_cost: 3,
      minimum_skill: 'Avanzado',
      bootcamp_id: 2
    },
    {  title: 'atravez d emi ventana',
    description: 'genero romantico',
    weeks: 2,
    enroll_cost: 5,
    minimum_skill: 'Avanzado',
    bootcamp_id: 3
  }
], {});

},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
