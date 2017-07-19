const Sequelize = require('sequelize');
const users = require('./users.json');
const projects = require('./projects.json');
const interests = require('./interests.json');

let db = null;
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL);
} else {
  db = new Sequelize('postgres:///techstarter');
}

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: { type: Sequelize.TEXT, unique: true },
  firstName: Sequelize.TEXT,
  lastName: Sequelize.TEXT,
  phone: Sequelize.TEXT,
  avatar: Sequelize.TEXT,
});

User.bulkCreate(users);

const Project = db.define('project', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  companyName: Sequelize.TEXT,
  appName: Sequelize.TEXT,
  byline: Sequelize.TEXT,
  logo: Sequelize.TEXT,
  imageUrl: Sequelize.TEXT,
  location: Sequelize.TEXT,
  description: Sequelize.TEXT,
  coFounders: Sequelize.TEXT,
  url: Sequelize.TEXT,
  fundedAmount: Sequelize.DECIMAL(10, 2),
  neededFunding: Sequelize.DECIMAL(10, 2),
  status: Sequelize.ENUM('ready', 'creating', 'failed')
});

Project.bulkCreate(projects);

const Interest = db.define('interest', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {type: Sequelize.TEXT, unique: true },
  image: Sequelize.TEXT
});

Interest.bulkCreate(interests);  

const Funding = db.define('funding', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  amount: Sequelize.DECIMAL(10, 2)
});

User.hasMany(Project, { foreignKey: 'userId'});

Project.belongsTo(User);

Project.hasMany(Funding, { foreignKey: 'projectId' });

Project.hasMany(Image, { foreignKey: 'projectId' });

Funding.belongsTo(User);

Funding.belongsTo(Project);

Interest.belongsToMany(User, { through: 'UserInterest' });

Interest.belongsToMany(Project, { through: 'ProjectInterest' });

Image.belongsTo(Project);

// User.hasMany(Interest);

// User.hasMany(Funding);

// Project.hasMany(Interest, { foreignKey: 'projectId' });

// db.sync({force: true});

module.exports = { db, User, Project, Interest, Funding, Image };
