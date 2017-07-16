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
  let urlObj = url.parse(req.body.url);
  console.log('urlObj: ', urlObj);
  let projectId = null;
  Project.create(req.body)
    .then(result => {
      if (!result) { throw result; }
      projectId = result.dataValues.id;
      return pageres.src(req.body.url, ['1440x900'], { filename: `${urlObj.host}`, crop: true })
        .dest(__dirname + '/../../public/assets/pageres/').run();
    })
    .then(() => {
      return Image.create({ url: `${urlObj.host}.png`, projectId: projectId });
    })
    .then(image => {
      if (!image) { throw image; }
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('Project.create: ', err);
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
