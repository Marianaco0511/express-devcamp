'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('users', [{
       username: 'Mariana',
       email: 'mcastiblanco23@misena.edu.co',
       password: '123456'
      },
      {username: 'Maria paula',
      email: 'mphernandez@misena.edu.co',
      password: '123456'
    },
      {username: 'Santiago',
      email: 'sdgomez23@misena.edu.co',
      password: '123456'
    }
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
