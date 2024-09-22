"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('registrationData', 'root', 'Akanksha@123', {
    host: 'localhost',
    dialect: 'mysql',
});
exports.default = exports.sequelize;
//run query in mysql to create db
//create database registrationData;
//# sourceMappingURL=db.js.map