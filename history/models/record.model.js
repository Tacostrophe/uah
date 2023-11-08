module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define('record', {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['create', 'update']],
          msg: 'Type must be "create" or "update"',
        },
      },
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return Record;
};
