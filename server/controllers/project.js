const { Project, Image } = require('../../db/');
const { pageres } = require('../../service');
const url = require('url');
const request = require('request-promise');
const config = require('config')['screenshotlayer'];
const util = require('../helpers/util');

module.exports.getAll = (req, res) => {
  Project.findAll({ include: [ { model: Image } ] })
    .then(projects => {
      if (!projects) { throw projects; }
      res.send(projects);
    })
    .catch(err => {
      console.log('Project.getAll: ', err);
      res.sendStatus(500);
    });
};

module.exports.create = (req, res) => {
  let projectName = req.body.name.split(' ').join('_');
  let screenshotXS = `${req.body.userId}_${projectName}_xs`;
  let screenshotXL = `${req.body.userId}_${projectName}_xl`;
  pageres.src(req.body.url, ['1280x720'], { filename: screenshotXS, crop: true })
    .dest(__dirname + '/../../public/assets/pageres/').run()
    .then(() => {
      return pageres.src(req.body.url, ['1280x720'], { filename: screenshotXL })
        .dest(__dirname + '/../../public/assets/pageres/').run();
    })
    .then(() => {
      return Project.create(req.body);
    })
    .then(project => {
      if (!project) { throw project; }
      return Image.bulkCreate([
        { url: `${screenshotXS}.png`, projectId: project.dataValues.id },
        { url: `${screenshotXL}.png`, projectId: project.dataValues.id }
      ]);
    })
    .then(result => {
      if (!result) { throw result; }
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('failed to create project: ', err);
      res.sendStatus(500);
    });
};

module.exports.getOne = (req, res) => {
  Project.findOne({ where: { id: req.params.id } })
    .then(project => {
      if (!project) { throw project; }
      res.send(project);
    })
    .catch(err => {
      console.log('Project.getOne: ', err);
      res.sendStatus(404);
    });
};

module.exports.update = (req, res) => {

};

module.exports.deleteOne = (req, res) => {

};
