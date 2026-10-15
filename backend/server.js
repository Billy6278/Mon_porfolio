require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const { profile, skills, projects, services, education, experiences } = require('./src/data/portfolioData');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(require('./src/middleware/errorHandler'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API Portfolio operationnelle (no DB)' });
});

app.get('/api/skills', (req, res) => {
  res.json({ success: true, data: skills });
});

app.get('/api/skills/:id', (req, res) => {
  const skill = skills.find((item) => item.id === Number(req.params.id));
  if (!skill) {
    return res.status(404).json({ success: false, message: 'Compétence introuvable' });
  }
  res.json({ success: true, data: skill });
});

app.get('/api/projects', (req, res) => {
  const featured = req.query.featured === 'true';
  const payload = featured ? projects.filter((project) => project.featured) : projects;
  res.json({ success: true, data: payload });
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find((item) => item.id === Number(req.params.id));
  if (!project) {
    return res.status(404).json({ success: false, message: 'Projet introuvable' });
  }
  res.json({ success: true, data: project });
});

app.get('/api/services', (req, res) => {
  res.json({ success: true, data: services });
});

app.get('/api/education', (req, res) => {
  res.json({ success: true, data: education });
});

app.get('/api/experience', (req, res) => {
  res.json({ success: true, data: experiences });
});

app.post('/api/contacts', (req, res) => {
  res.json({ success: true, message: 'Message envoyé avec succès' });
});

app.get('/api/public/profile', (req, res) => {
  res.json({ success: true, data: profile });
});

app.get('/', (req, res) => {
  res.json({ message: 'API Portfolio (no DB)' });
});

app.listen(PORT, () => {
  console.log(`Serveur demarre sur http://localhost:${PORT}`);
});
