const db = require('../models');

async function connectDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('DB connected');
  } catch (err) {
    console.error('DB connection error:', err);
  }
}

module.exports = connectDatabase;
