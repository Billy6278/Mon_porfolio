const multer = require('multer');
const fs = require('fs');
const path = require('path');

const uploadsPath = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadsPath);
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    const safeName = `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    cb(null, `${safeName}${ext}`);
  },
});

function fileFilter(req, file, cb) {
  const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'application/pdf'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Type de fichier non autorise'), false);
  }
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 10 * 1024 * 1024 } });

module.exports = upload;
