import { createServer } from 'http';
import { parse } from 'querystring';

const server = createServer((req, resp) => {
  switch (req.url) {
    case '/status': {
      resp.writeHead(200, {
        'Content-Type': 'application/json',
      });
      resp.write(
        JSON.stringify({
          status: 'Ok',
        }));
      resp.end();
      break;
    }
    case '/authenticate': {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        const params = parse(data);
        resp.end();
      });
      break;
    }
    default: {
      resp.writeHead(404, 'Service not found.');
      resp.end();
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listing at http://${HOSTNAME}:${PORT}`)
});