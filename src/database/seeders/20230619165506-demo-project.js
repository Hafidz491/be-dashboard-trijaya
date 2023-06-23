'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const data = [
      {
        instansiName: 'Pertamina',
        projectNumber: '01',
        address: 'Jl. Medan Merdeka Timur No. 1, Jakarta Pusat',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Garuda Indonesia',
        projectNumber: '02',
        address: 'Jl. Kebon Sirih No. 44, Jakarta Pusat',
        isFinished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Bank Mandiri',
        projectNumber: '03',
        address: 'Jl. Jendral Gatot Subroto Kav. 36-38, Jakarta Selatan',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Telkom Indonesia',
        projectNumber: '04',
        address: 'Jl. Japati No. 1, Bandung, Jawa Barat',
        isFinished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Indonesia Stock Exchange',
        projectNumber: '05',
        address: 'Jl. Sudirman Kav. 52-53, Jakarta Selatan',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Pupuk Indonesia',
        projectNumber: '06',
        address: 'Jl. TB Simatupang No. 22, Jakarta Selatan',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'PLN (Perusahaan Listrik Negara)',
        projectNumber: '07',
        address: 'Jl. Trunojoyo No. 2, Jakarta Selatan',
        isFinished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Ministry of Finance',
        projectNumber: '08',
        address: 'Jl. Lapangan Banteng Timur No. 2-4, Jakarta Pusat',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Ministry of Transportation',
        projectNumber: '09',
        address: 'Jl. Medan Merdeka Barat No. 8, Jakarta Pusat',
        isFinished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Ministry of Education and Culture',
        projectNumber: '10',
        address: 'Jl. Jenderal Sudirman, Senayan, Jakarta Selatan',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Bank Central Asia (BCA)',
        projectNumber: '11',
        address: 'Jl. MH Thamrin No. 1, Jakarta Pusat',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Bank Rakyat Indonesia (BRI)',
        projectNumber: '12',
        address: 'Jl. Ir. H. Juanda No. 1-3, Jakarta Pusat',
        isFinished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Bank Negara Indonesia (BNI)',
        projectNumber: '13',
        address: 'Jl. Jenderal Sudirman Kav. 1, Jakarta Pusat',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Ministry of Health',
        projectNumber: '14',
        address: 'Jl. HR Rasuna Said Kav. 6-7, Jakarta Selatan',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Indonesia Ministry of Tourism',
        projectNumber: '15',
        address: 'Jl. Medan Merdeka Barat No. 17, Jakarta Pusat',
        isFinished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Garuda Wisnu Kencana Cultural Park',
        projectNumber: '16',
        address: 'Jl. Raya Uluwatu, Ungasan, Kuta Selatan, Badung, Bali',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'National Museum of Indonesia',
        projectNumber: '17',
        address: 'Jl. Medan Merdeka Barat No. 12, Jakarta Pusat',
        isFinished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Taman Mini Indonesia Indah',
        projectNumber: '18',
        address: 'Jl. Taman Mini I, Jakarta Timur',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Mount Bromo',
        projectNumber: '19',
        address: 'Jl. Raya Bromo No. 1, Probolinggo, Jawa Timur',
        isFinished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiName: 'Borobudur Temple',
        projectNumber: '20',
        address: 'Jl. Badrawati, Borobudur, Magelang, Jawa Tengah',
        isFinished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert('Projects', data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Projects', null, {});
  },
};
