const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Auto-route every top-level EJS file in /views
fs.readdirSync(path.join(__dirname, 'views')).forEach(file => {
  if (file.endsWith('.ejs') && file !== 'components') {
    const route = '/' + file.replace('.ejs', '');
    app.get(route === '/index' ? '/' : route, (req, res) => {
      res.render(file.replace('.ejs', ''));
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
