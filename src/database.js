import dbConfig from"./db.config.js";
import { cursoModel } from "./models/curso.js";
import Sequelize from "sequelize";


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  });


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.curso = cursoModel(sequelize, Sequelize);

export default db;





