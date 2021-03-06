const { DataTypes } = require('sequelize');
const db = require('../db');

const Course = db.define('course', {
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
});

module.exports = Course;
