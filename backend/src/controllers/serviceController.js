const { Service } = require('../models');

async function getAll(req, res, next) {
  try {
    const { published } = req.query;
    const where = {};

    if (published === 'true') {
      where.published = true;
    } else if (published === 'false') {
      where.published = false;
    }

    const services = await Service.findAll({
      where,
      order: [['displayOrder', 'ASC'], ['createdAt', 'ASC']],
    });

    res.json({ success: true, data: services });
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const service = await Service.findByPk(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service introuvable' });
    }

    res.json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const service = await Service.create(req.body);
    res.status(201).json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const service = await Service.findByPk(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service introuvable' });
    }

    await service.update(req.body);
    res.json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const service = await Service.findByPk(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service introuvable' });
    }

    await service.destroy();
    res.json({ success: true, message: 'Service supprimé' });
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
