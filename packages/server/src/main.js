import express from 'express';

const server = express();

server.get('/status', (_, res) => {
  res.send({
    status: 'Ok',
  });
});

server.post('/authenticate', express.json(), (req, res) => {
  console.log(
    'E-Mail', req.body.email,
    'Senha', req.body.password
  );
  res.send();
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listing at http://${HOSTNAME}:${PORT}`)
});