const { Project } = require('../models');

async function getAll(req, res, next) {
  try {
    const { featured } = req.query;
    const where = {};

    if (featured === 'true') {
      where.featured = true;
    }

    const projects = await Project.findAll({
      where,
      order: [['createdAt', 'DESC']],
    });

    res.json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const project = await Project.findByPk(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Projet introuvable',
      });
    }

    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const project = await Project.findByPk(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Projet introuvable',
      });
    }

    await project.update(req.body);
    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const project = await Project.findByPk(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Projet introuvable',
      });
    }

    await project.destroy();
    res.json({ success: true, message: 'Projet supprime' });
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
