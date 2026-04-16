const express = require('express');
const app = express();
const port = 3000;

let users = [{ username: 'admin', password: 'password' }];

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    res.send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});