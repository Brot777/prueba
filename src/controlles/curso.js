import db from "../database.js";
const Curso = db.curso;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
export const createCurso = (req, res) => {

  // Create a curso
  const curso = req.body;

  // Save Tutorial in the database
  Curso.create(curso)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong."
      });
    });
};


exports.findAll = (req, res) => {

  Curso.findAll({ where: {} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};