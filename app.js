// Mise en place code express API
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/date', (req, res) => {
  res.send(`Current date and time: ${new Date().toISOString()}`);
});

app.get('/status', (req, res) => {
  res.send({'status': 'API is running'});
});

app.get('/version', (req, res) => {
  res.send({'version': '1.0.1'});
});

// Only start server if this file is run directly
// Used to prevent server starting when imported in tests
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;