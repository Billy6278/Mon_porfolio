const { Contact } = require('../models');

async function getAll(req, res, next) {
  try {
    const { isRead } = req.query;
    const where = {};

    if (isRead === 'true') {
      where.isRead = true;
    } else if (isRead === 'false') {
      where.isRead = false;
    }

    const contacts = await Contact.findAll({
      where,
      order: [['createdAt', 'DESC']],
    });

    res.json({ success: true, data: contacts });
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const contact = await Contact.findByPk(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Message introuvable',
      });
    }

    res.json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Message envoye avec succes',
      data: contact,
    });
  } catch (error) {
    next(error);
  }
}

async function markAsRead(req, res, next) {
  try {
    const contact = await Contact.findByPk(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Message introuvable',
      });
    }

    await contact.update({ isRead: true });
    res.json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const contact = await Contact.findByPk(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Message introuvable',
      });
    }

    await contact.destroy();
    res.json({ success: true, message: 'Message supprime' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  markAsRead,
  remove,
};
