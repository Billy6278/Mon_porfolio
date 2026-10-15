const { Experience } = require('../models');

async function getAll(req, res, next) {
  try {
    const { published } = req.query;
    const where = {};

    if (published === 'true') {
      where.published = true;
    } else if (published === 'false') {
      where.published = false;
    }

    const experiences = await Experience.findAll({
      where,
      order: [['displayOrder', 'ASC'], ['startDate', 'DESC']],
    });

    res.json({ success: true, data: experiences });
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const experience = await Experience.findByPk(req.params.id);

    if (!experience) {
      return res.status(404).json({ success: false, message: 'Expérience introuvable' });
    }

    res.json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const experience = await Experience.findByPk(req.params.id);

    if (!experience) {
      return res.status(404).json({ success: false, message: 'Expérience introuvable' });
    }

    await experience.update(req.body);
    res.json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const experience = await Experience.findByPk(req.params.id);

    if (!experience) {
      return res.status(404).json({ success: false, message: 'Expérience introuvable' });
    }

    await experience.destroy();
    res.json({ success: true, message: 'Expérience supprimée' });
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
