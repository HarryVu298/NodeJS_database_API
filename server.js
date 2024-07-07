const express = require('express');
const db = require('./database');

const app = express();
const port = 3000;

app.use(express.json());

// API endpoint to get all users
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// API endpoint to get a single user by id
app.get('/user/:id', (req, res) => {
  const sql = 'SELECT * FROM users WHERE id = ?';
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// API endpoint to create a new user
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  const params = [name, email];
  db.run(sql, params, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: { id: this.lastID, name, email }
    });
  });
});

// API endpoint to update a user
app.put('/user/:id', (req, res) => {
  const { name, email } = req.body;
  const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  const params = [name, email, req.params.id];
  db.run(sql, params, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: { id: req.params.id, name, email }
    });
  });
});

// API endpoint to delete a user
app.delete('/user/:id', (req, res) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  const params = [req.params.id];
  db.run(sql, params, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'deleted',
      data: { id: req.params.id }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
