const express = require('express');
const app = express();
app.get('/', (req, res) =>
{res.send('Hello home page')});
app.listen(3000, () => {
  console.log('Connected 3000 port!')
});
