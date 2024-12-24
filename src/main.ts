import express from 'express';
import * as path from 'node:path';

const app = express();
const port = 80;

app.use(express.json());

app.get('/after-login', (req, res) => {
  res.redirect(302, "https://naver.me/IxsJeD0E");
})

app.use(express.static(path.join(process.cwd(), 'site')));

app.listen(port, () => {
  console.info(`App started on port ${port}`)
});