const { Education } = require('../models');

async function getAll(req, res, next) {
  try {
    const { published } = req.query;
    const where = {};

    if (published === 'true') {
      where.published = true;
    } else if (published === 'false') {
      where.published = false;
    }

    const educations = await Education.findAll({
      where,
      order: [['displayOrder', 'ASC'], ['startDate', 'DESC']],
    });

    res.json({ success: true, data: educations });
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const education = await Education.findByPk(req.params.id);

    if (!education) {
      return res.status(404).json({ success: false, message: 'Formation introuvable' });
    }

    res.json({ success: true, data: education });
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const education = await Education.create(req.body);
    res.status(201).json({ success: true, data: education });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const education = await Education.findByPk(req.params.id);

    if (!education) {
      return res.status(404).json({ success: false, message: 'Formation introuvable' });
    }

    await education.update(req.body);
    res.json({ success: true, data: education });
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const education = await Education.findByPk(req.params.id);

    if (!education) {
      return res.status(404).json({ success: false, message: 'Formation introuvable' });
    }

    await education.destroy();
    res.json({ success: true, message: 'Formation supprimée' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
