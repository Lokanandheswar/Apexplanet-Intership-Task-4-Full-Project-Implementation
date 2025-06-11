const express = require('express');
const path = require('path');
const app = express();

let feedbackList = [];

app.use(express.static('public'));
app.use(express.json());

app.get('/feedback', (req, res) => {
  res.json(feedbackList);
});

app.post('/feedback', (req, res) => {
  const { username, comment } = req.body;
  if (username && comment) {
    feedbackList.push({ username, comment });
    res.status(201).json({ message: 'Feedback added' });
  } else {
    res.status(400).json({ message: 'Missing fields' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
