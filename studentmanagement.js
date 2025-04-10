// first create a folder
// command prompt navigate to that folder
// run the following commands
// npm init -y
// npm install express
// save the following code in a file named app.js
// run the following command to start the server
// node app.js



const express = require('express');
const app = express();
app.use(express.json());

let students = [];
let id = 1;

app.post('/students', (req, res) => {
  let s = { id: id++, ...req.body };
  students.push(s);
  res.send(s);
});

app.get('/students', (req, res) => {
  res.send(students);
});

app.get('/students/:id', (req, res) => {
  let s = students.find(st => st.id == req.params.id);
  s ? res.send(s) : res.status(404).send('Not found');
});

app.put('/students/:id', (req, res) => {
  let s = students.find(st => st.id == req.params.id);
  if (s) {
    Object.assign(s, req.body);
    res.send(s);
  } else {
    res.status(404).send('Not found');
  }
});

app.delete('/students/:id', (req, res) => {
  students = students.filter(st => st.id != req.params.id);
  res.send('Deleted');
});

app.listen(3000, () => console.log('API running'));

// To test the API, use Postman
// 1. Create a new student
//    method: POST http://localhost:3000/students
//    Body: { "name": "John Doe", "age": 20 }
// 2. Get all students
//    method: GET http://localhost:3000/students
// 3. Get a student by ID
//    method: GET http://localhost:3000/students/1
// 4. Update a student
//    method: PUT http://localhost:3000/students/1
//    Body: { "name": "Jane Doe", "age": 21 }
// 5. Delete a student
//    method: DELETE http://localhost:3000/students/1