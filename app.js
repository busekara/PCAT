const express = require('express');
const path = require('path');

const app = express();

//express.static bir middleware fonksiyonudur.
//MIDDLEWARES
app.use(express.static('public'));

//bu fonksiyonda bir middleware'dir
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
