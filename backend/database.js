// database.js

const mysql = require('mysql');

// MySQL connection configuration
const dbConfig = {
  host: 'localhost', 
  user: 'root', 
  password: '8520', 
  database: 'onedaytoday1' 
};

let connection;

function connectToDatabase() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

  // Handle MySQL connection errors
  connection.on('error', (err) => {
    console.error('MySQL connection error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connectToDatabase(); // Reconnect if connection is lost
    } else {
      throw err;
    }
  });
}

function getDb() {
  return connection;
}

module.exports = {
  connectToDatabase,
  getDb,
};
