const Show = require('../models/show');
const Character = require('../models/character');

function showsIndex(req, res) {
  Show.find((err, shows) => {
    if (err) return res.render('/');
    return res.render('shows', { shows });
  });
}

function showsNew(req, res) {
  return res.render('shows/new', { error: null });
}

function showsCreate(req, res) {
  const show = new Show(req.body.show);
  show.save(err => {
    if (err) return res.render('shows/new', { error: err.message});
    console.log(show);
    return res.redirect('shows');
  });
}

function showsShow(req, res) {
  Show.findById(req.params.id, (err, show) => {
    if (err) return res.render('shows');
    Character.find({'show': req.params.id}, (err, characters) => {
      if (err) return res.render('shows');
      return res.render('shows/show', {show, characters});
    });
  });
}

function showsDelete(req, res) {
  Show.findByIdAndRemove(req.params.id, err => {
    if (err) return res.render('shows/show');
    return res.redirect('/shows');
  });
}

function showsEdit(req, res) {
  Show.findById(req.params.id, (err, show) => {
    if (err) return res.render('/shows/show', {show: null, error: err.message});
    return res.render('shows/edit', {show, error: null});
  });
}

function showsUpdate(req, res) {
  Show.findByIdAndUpdate(req.params.id, req.body.show, {new: true}, (err) => {
    if (err) return res.render(`/shows`);
    return res.redirect(`/shows`);
  });
}

module.exports = {
  index: showsIndex,
  new: showsNew,
  create: showsCreate,
  show: showsShow,
  delete: showsDelete,
  edit: showsEdit,
  update: showsUpdate
};
