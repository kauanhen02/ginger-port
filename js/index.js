import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/portifolio", "/pages/portifolio.html")
router.add("/contact", "/pages/contact.html")
router.add("/esg", "/pages/esg.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const express = require('express');
const app = express();

app.use(express.static('public')); // Serve arquivos estáticos
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
