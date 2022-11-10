'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull : {
          args: true,
          msg: 'Title debe estar presnete'
        },
        notEmpty: {
          args: true,
          msg: 'Title no debe ser vacio'
        },
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          args: true,
          msg: 'Title debe estar presnete'
        },
        notEmpty: {
          args: true,
          msg: 'Title no debe ser vacio'
        },
      }
    },
    weeks:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull : {
          args: true,
          msg: 'weeks debe estar presnete'
        },
        notEmpty: {
          args: true,
          msg: 'weeks no debe ser vacio'
        },
    }
  },
    enroll_cost:{ 
      type : DataTypes.FLOAT,
      allowNull: false,
      isFloat: true,
      validate:{
        notNull : {
          args: true,
          msg: 'enroll:cost debe estar presnete'
        },
        notEmpty: {
          args: true,
          msg: 'enroll:cost no debe ser vacio'
        },
      }
    },

    minimum_skill:{ 
      type : DataTypes.STRING,
      allowNull: false,
      validate:{
      notNull : {
        args: true,
        msg: 'username debe estar presnete'
      },
      notEmpty: {
        args: true,
        msg: 'username no debe ser vacio'
      },
    }
  },
  bootcamp_id:{
    type : DataTypes.INTEGER,
    allowNull: false,
    validate:{
      isNumeric:{
        args: true,
        msg: 'Solo acepta números'
      },
      notNull : {
        args: true,
        msg: 'bootcamp debe estar presnete'
      },
      notEmpty: {
        args: true,
        msg: 'bootcamp no debe ser vacio'
      }
    }
  }
  }, {
    sequelize,
    modelName: 'courses',
    timestamps: false,
  });
  return courses;
};