'use strict';
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    tags: DataTypes.STRING,
    visualized: DataTypes.BOOLEAN
  }, {});
  Link.associate = (models) => {
     Link.belongsTo(models.User, { });
  };
  return Link;
};