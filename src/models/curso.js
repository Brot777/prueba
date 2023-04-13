export const cursoModel= (sequelize, Sequelize) => {
    const curso = sequelize.define("curso", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return curso;
  };