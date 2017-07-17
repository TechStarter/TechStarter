'use strict';
const express = require('express');
const middleware = require('../middleware');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.render('index.ejs');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

router.route('/project/create')
  .get(middleware.auth.verify, (req, res) => res.render('index.ejs'));

router.route('/project/:id')
  .get(middleware.auth.verify, (req, res) => res.render('index.ejs'));

module.exports = router;
