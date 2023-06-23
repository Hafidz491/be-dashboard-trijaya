const sequelize = require('sequelize');
// const pg = require('pg')

// pg.defaults.ssl = true;

// local
const db = new sequelize('trijaya_app', 'fill', 'secret', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

// heroku
// const db = new sequelize('dahb619dum3s10', 'fkmlsncdmwbnbg', '8c458aa6960652d65de46e2723bb31d74228048fac5530c3517379ee50cf325d', {
// 	host: 'ec2-54-84-98-18.compute-1.amazonaws.com',
// 	dialect: 'postgres'
// })

db.sync;

module.exports = db;
