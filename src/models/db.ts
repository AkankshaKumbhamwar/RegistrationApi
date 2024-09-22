import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('registrationData', 'root', 'Akanksha@123', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;

//run query in mysql to create db
//create database registrationData;
