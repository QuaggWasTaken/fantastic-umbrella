const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{
      model: Product
    }]
  }).then(dbCategory => {
    res.json(dbCategory)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    include: [{
      model: Product
    }],
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

module.exports = router;
