const { User, Contact } = require('../../db');
const Promise = require('bluebird');
const color = require('colors');

module.exports.getAll = (req, res) => {
  let option = { where: { status: 'contact' }, order: [['firstName', 'ASC']] };
  if (req.query.keyword !== '') {
    option = { where: { firstName: { $iLike: `${req.query.keyword}%` }, status: 'contact' }, order: [['firstName', 'ASC']] };
  }
  console.log('Search contacts with: '.yellow, option);
  Contact.findAll({ where: { userId: req.user.id, status: 'contact' }, include: [{model: User, as: 'contacts'}] })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log('error getting all contacts: '.red, err);
      res.sendStatus(500);
    });
  // let option = { order: [['firstName', 'ASC']] };
  // if (req.query.keyword !== '') {
  //   option = { where: { firstName: { $iLike: `${req.query.keyword}%` } }, order: [['firstName', 'ASC']] };
  // }
  // console.log('Search contacts with: ', option);
  // Contact.findAll({ where: { userId: req.user.id } })
  //   .then(contacts => {
  //     if (!contacts) { throw contacts; }
  //     res.send(contacts);
  //   })
  //   .catch(err => {
  //     console.log('error getting contacts: ', err);
  //     res.send(500);
  //   });
};

module.exports.create = (req, res) => {
  Promise.all([
    User.findOne({ where: { id: req.body.userId } }),
    User.findOne({ where: { id: req.body.contactId } })
  ]).spread((requester, accepter) => {
    return Promise.all([
      requester.addContacts(accepter),
      accepter.addContacts(requester)
    ]);
  }).spread((result1, result2) => {
    if (!result1) { throw result1; }
    if (!result2) { throw result2; }
    res.sendStatus(201);
  }).catch(err => {
    console.log('failed to create contact: ', err);
    res.sendStatus(500);
  });
  // Contact.create(req.body)
  //   .then(result => {
  //     if (!result) { throw result; }
  //     res.sendStatus(201);
  //   })
  //   .catch(err => {
  //     console.log('error creating contact: ', err);
  //     res.sendStatus(500);
  //   });

};

module.exports.getOne = (req, res) => {

};

module.exports.update = (req, res) => {
  console.log('contact update: '.yellow, req.body);
  Promise.all([
    Contact.findById(req.params.id),
    Contact.findById(req.user.id)
  ]).spread((result1, result2) => {
    return Promise.all([
      result1.update(req.body),
      result2.update(req.body)
    ]);
  }).then(() => {
    res.sendStatus(200);
  }).catch(err => {
    console.log('error when updating contacts: '.red, err);
    res.sendStatus(500);
  });
  // Contact.findOne({ where: { userId: req.params.id, accepterId: req.user.id } })
  //   .then(contact => {
  //     console.log('contact update findOne result: '.cyan, contact);
  //     if (!contact) { throw contact; }
  //     contact.update(req.body);
  //   })
  //   .then(result => {
  //     console.log('update result: '.cyan, result);
  //     res.sendStatus(200);
  //   })
  //   .catch(err => {
  //     console.log('err updating contact: ', err);
  //     res.sendStatus(500);
  //   });
};
