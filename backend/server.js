const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDatabase, getDb } = require('./database'); // Adjust path as per your directory structure

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connect to MySQL database
connectToDatabase();

app.post('/contacts', (req, res) => {
  const formData = req.body;
  const sql = 'INSERT INTO contact_us (name, contact_no, email, message) VALUES (?, ?, ?, ?)';
  const values = [formData.name, formData.phone, formData.email, formData.message];

  const connection = getDb();

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting form data into MySQL:', err);
      res.status(500).json({ error: 'Error inserting form data' });
      return;
    }

    console.log('Form data inserted into MySQL:', result);
    res.status(200).json({ message: 'Form submitted successfully!' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
