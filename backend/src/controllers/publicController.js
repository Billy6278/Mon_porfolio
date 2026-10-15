async function getPublicProfile(req, res) {
  res.json({ success: true, data: {} });
}

async function getPublicSettings(req, res) {
  res.json({ success: true, data: {} });
}

module.exports = {
  getPublicProfile,
  getPublicSettings,
};
