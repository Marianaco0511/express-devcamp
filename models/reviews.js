'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
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
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          args: true,
          msg: 'Text debe estar presnete'
        },
        notEmpty: {
          args: true,
          msg: 'Text no debe ser vacio'
        },
      }
    },
    
    rating: { 
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
    },
    user_id:{
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
    modelName: 'reviews',
    timestamps: false,
  });
  return reviews;
};