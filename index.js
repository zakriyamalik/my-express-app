const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like index.html)
app.use(express.static('public'));

// Simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
