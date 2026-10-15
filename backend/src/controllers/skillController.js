const { Skill } = require('../models');

async function getAll(req, res, next) {
  try {
    const { category } = req.query;
    const where = {};

    if (category) {
      where.category = category;
    }

    const skills = await Skill.findAll({
      where,
      order: [
        ['displayOrder', 'ASC'],
        ['name', 'ASC'],
      ],
    });

    res.json({ success: true, data: skills });
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const skill = await Skill.findByPk(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Competence introuvable',
      });
    }

    res.json({ success: true, data: skill });
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({ success: true, data: skill });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const skill = await Skill.findByPk(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Competence introuvable',
      });
    }

    await skill.update(req.body);
    res.json({ success: true, data: skill });
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const skill = await Skill.findByPk(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Competence introuvable',
      });
    }

    await skill.destroy();
    res.json({ success: true, message: 'Competence supprimee' });
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
