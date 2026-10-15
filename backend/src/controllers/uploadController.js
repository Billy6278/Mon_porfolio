function uploadFile(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Aucun fichier televerse' });
    }

    const publicUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(201).json({ success: true, data: { url: publicUrl, originalName: req.file.originalname } });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  uploadFile,
};
