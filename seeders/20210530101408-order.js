'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('orders', [
      {
        "customerId" : "1",
        "movieId" : "100",
        "poster_path" : "/8kSerJrhrJWKLk1LViesGcnrUPE.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "1",
        "movieId" : "120",
        "poster_path" : "/nSNle6UJNNuEbglNvXt67m1a1Yn.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "2",
        "movieId" : "150",
        "poster_path" : "/cyj3NL0JotRMPajf0lJxMHknfK4.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "2",
        "movieId" : "200",
        "poster_path" : "/jYtNUfMbU6DBbmd4LUS19u4hF4p.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "3",
        "movieId" : "180",
        "poster_path" : "/ccqpHq5tk5W4ymbSbuoy4uYOxFI.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "3",
        "movieId" : "400",
        "poster_path" : "/bPpdgjkzI76MdIo3deWsLFhzyXd.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "4",
        "movieId" : "300",
        "poster_path" : "/nSNle6UJNNuEbglNvXt67m1a1Yn.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "4",
        "movieId" : "300",
        "poster_path" : "/f4nkkSF7Fpyv7Rv31RCEEfw060P.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "5",
        "movieId" : "190",
        "poster_path" : "/f4nkkSF7Fpyv7Rv31RCEEfw060P.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "5",
        "movieId" : "500",
        "poster_path" : "/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "6",
        "movieId" : "300",
        "poster_path" : "/f4nkkSF7Fpyv7Rv31RCEEfw060P.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "7",
        "movieId" : "438",
        "poster_path" : "/pRshONhwgQYb2IYcxhEIMDFc62d.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "7",
        "movieId" : "222",
        "poster_path" : "/aP8MDztGU8W1I5qhrHXmv1fbIdj.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "8",
        "movieId" : "333",
        "poster_path" : "/pXIVHT73QG70nZZdsVMwa0OgFUK.jpg",
        "rate" : "5",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]
    );



  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
