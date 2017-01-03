const Character = require('../models/character');
// const Show = require('../models/show');

function charactersIndex(req, res) {
  return res.render('characters');
}

function charactersNew (req, res) {
  const character = {showId: req.params.id};
  return res.render('characters/new', {character});
}

function charactersCreate(req, res) {
  const character = new Character(req.body.character);
  character.save(err => {
    if (err) return res.render('/' );
    return res.render('characters/show', {character});
  });
}

function charactersShow(req, res) {
  Character.findById(req.params.id, (err, character) => {
    if (err) return res.render('/');
    return res.render('characters/show', {character});
  });
}

function charactersDelete(req, res) {
  Character.findByIdAndRemove(req.params.id, err => {
    if (err) return res.render('/');
    return res.redirect(`/shows`);
  });
}

function charactersEdit(req, res) {
  Character.findById(req.params.id, (err, character) => {
    if (err) return res.render('/');
    return res.render('characters/edit', {character});
  });
}

function charactersUpdate(req, res) {
  Character.findByIdAndUpdate(req.params.id, req.body.character, {new: true}, (err) => {
    if (err) return res.render('/');
    return res.redirect(`/characters/${req.params.id}`);
  });
}

module.exports = {
  new: charactersNew,
  create: charactersCreate,
  show: charactersShow,
  delete: charactersDelete,
  edit: charactersEdit,
  update: charactersUpdate,
  index: charactersIndex
};
