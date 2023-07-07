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

    function getRandomMonthTimestamp() {
      const currentYear = new Date().getFullYear();
      const lastYear = currentYear - 1;
      const randomYear =
        Math.floor(Math.random() * (currentYear - lastYear + 1)) + lastYear; // Random year between last year and current year
      const randomMonth = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
      const randomDay = Math.floor(Math.random() * 28) + 1; // Random day between 1 and 28
      const randomHour = Math.floor(Math.random() * 24); // Random hour between 0 and 23
      const randomMinute = Math.floor(Math.random() * 60); // Random minute between 0 and 59
      const randomSecond = Math.floor(Math.random() * 60); // Random second between 0 and 59

      const randomTimestamp = new Date(
        randomYear,
        randomMonth - 1,
        randomDay,
        randomHour,
        randomMinute,
        randomSecond
      ).getTime();
      return new Date(randomTimestamp);
    }

    const data = [
      {
        instansiName: 'Pertamina',
        projectNumber: '01',
        address: 'Jl. Medan Merdeka Timur No. 1, Jakarta Pusat',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Garuda Indonesia',
        projectNumber: '02',
        address: 'Jl. Kebon Sirih No. 44, Jakarta Pusat',
        isFinished: false,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Bank Mandiri',
        projectNumber: '03',
        address: 'Jl. Jendral Gatot Subroto Kav. 36-38, Jakarta Selatan',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Telkom Indonesia',
        projectNumber: '04',
        address: 'Jl. Japati No. 1, Bandung, Jawa Barat',
        isFinished: false,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Indonesia Stock Exchange',
        projectNumber: '05',
        address: 'Jl. Sudirman Kav. 52-53, Jakarta Selatan',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Pupuk Indonesia',
        projectNumber: '06',
        address: 'Jl. TB Simatupang No. 22, Jakarta Selatan',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'PLN (Perusahaan Listrik Negara)',
        projectNumber: '07',
        address: 'Jl. Trunojoyo No. 2, Jakarta Selatan',
        isFinished: false,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Ministry of Finance',
        projectNumber: '08',
        address: 'Jl. Lapangan Banteng Timur No. 2-4, Jakarta Pusat',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Ministry of Transportation',
        projectNumber: '09',
        address: 'Jl. Medan Merdeka Barat No. 8, Jakarta Pusat',
        isFinished: false,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Ministry of Education and Culture',
        projectNumber: '10',
        address: 'Jl. Jenderal Sudirman, Senayan, Jakarta Selatan',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Bank Central Asia (BCA)',
        projectNumber: '11',
        address: 'Jl. MH Thamrin No. 1, Jakarta Pusat',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Bank Rakyat Indonesia (BRI)',
        projectNumber: '12',
        address: 'Jl. Ir. H. Juanda No. 1-3, Jakarta Pusat',
        isFinished: false,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Bank Negara Indonesia (BNI)',
        projectNumber: '13',
        address: 'Jl. Jenderal Sudirman Kav. 1, Jakarta Pusat',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Ministry of Health',
        projectNumber: '14',
        address: 'Jl. HR Rasuna Said Kav. 6-7, Jakarta Selatan',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Indonesia Ministry of Tourism',
        projectNumber: '15',
        address: 'Jl. Medan Merdeka Barat No. 17, Jakarta Pusat',
        isFinished: false,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Garuda Wisnu Kencana Cultural Park',
        projectNumber: '16',
        address: 'Jl. Raya Uluwatu, Ungasan, Kuta Selatan, Badung, Bali',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'National Museum of Indonesia',
        projectNumber: '17',
        address: 'Jl. Medan Merdeka Barat No. 12, Jakarta Pusat',
        isFinished: false,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Taman Mini Indonesia Indah',
        projectNumber: '18',
        address: 'Jl. Taman Mini I, Jakarta Timur',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Mount Bromo',
        projectNumber: '19',
        address: 'Jl. Raya Bromo No. 1, Probolinggo, Jawa Timur',
        isFinished: true,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
      },
      {
        instansiName: 'Borobudur Temple',
        projectNumber: '20',
        address: 'Jl. Badrawati, Borobudur, Magelang, Jawa Tengah',
        isFinished: false,
        createdAt: getRandomMonthTimestamp(),
        updatedAt: getRandomMonthTimestamp(),
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
