const express = require('express');
const router  = express.Router();
const showsController = require('../controllers/showsController');
const charactersController = require('../controllers/charactersController');

router.get('/', (req, res) => res.render('index'));

router.route('/shows')
  .get(showsController.index)
  .post(showsController.create);

router.route('/shows/new')
  .get(showsController.new);

router.route('/shows/:id')
  .get(showsController.show)
  .delete(showsController.delete)
  .put(showsController.update)
  .post(charactersController.create);

router.route('/shows/:id/edit')
  .get(showsController.edit);

router.route('/shows/:id/characters/new')
  .get(charactersController.new);

router.route('/characters/:id/edit')
  .get(charactersController.edit);

router.route('/characters/:id')
  .get(charactersController.show)
  .delete(charactersController.delete)
  .put(charactersController.update);

router.route('/characters')
  .get(charactersController.index);

module.exports = router;
