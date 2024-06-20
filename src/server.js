import express from 'express';

const PORT = 4000;
const app = express();

const getHome = (req, res) => {
  return res.send('Home!');
};

app.get('/', getHome);

const getLogin = (req, res) => {
  return res.send('login');
};

app.get('/login', getLogin);

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
