// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Use body-parser to parse the body of the request
app.use(bodyParser.json());

// Read the comments from the file
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// Add a new comment
app.post('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      const comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
        if (err) {
          res.status(500).send('Internal Server Error');
        } else {
          res.send('Comment added');
        }
      });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


