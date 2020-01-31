const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

let count = 1;
app.use('/', (req, res, next) => {
  console.time('Request');
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Requests made: ${count}`);
  count += 1;
  console.timeEnd('Request');
  console.log(`***********************`);
  next();
});

function idGenerator() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random().toString(36).substr(2, 9);
};

function checkUserExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(project => project.id == id);
  if(!project) {
    return res.status(400).json({ error: "User does not exist"});
  }

  next();
};

app.get('/projects', (req, res) => {
  return res.json(projects);
});

app.get('/projects/:id', checkUserExists, (req, res) => {
  const { id } = req.params;

  let project = projects.find(project => project.id == id);

  return res.json(project);
});

app.post('/projects', (req, res) => {
  const { title } = req.body;

  const id = idGenerator();

  let project = {
    id,
    title,
    tasks: []
  }

  projects.push(project);

  return res.json(projects);
});

app.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);

  project.tasks.push(title);

  return res.json(projects);
});

app.put('/projects/:id', checkUserExists, (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  let project = projects.find(project => project.id == id);

  project.title = title;

  return res.json(projects);
});

app.put('/projects/:id/tasks/:taskId', (req, res) => {
  const { id, taskId } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);
  

  project.tasks[taskId] = title;

  return res.json(projects);
});

app.delete('/projects/:id', checkUserExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id == id);

  projects.splice(projectIndex, 1);

  return res.json(projects);
});

app.delete('/projects/:id/tasks/:taskId', (req, res) => {
  const { id, taskId } = req.params;

  const project = projects.find(project => project.id == id);
  

  project.tasks.splice(taskId);

  return res.json(projects);
});

app.listen(3002);