const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./skijasi.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Database opened successfully');
  }
});

// Create table if it does not exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      age INTEGER NOT NULL,
      does_ski BOOLEAN NOT NULL
    )
  `);

  // Insert dummy data if the table is empty
  db.get('SELECT COUNT(*) AS count FROM users', (err, row) => {
    if (err) {
      console.error('Error checking user count:', err);
    } else {
      if (row.count === 0) {
        const users = [
          { first_name: 'John', last_name: 'Doe', age: 30, does_ski: true },
          { first_name: 'Jane', last_name: 'Smith', age: 25, does_ski: false },
          { first_name: 'Michael', last_name: 'Jordan', age: 40, does_ski: true },
          { first_name: 'Sarah', last_name: 'Connor', age: 35, does_ski: false },
          { first_name: 'Jack', last_name: 'Sparrow', age: 45, does_ski: true }
        ];

        const stmt = db.prepare('INSERT INTO users (first_name, last_name, age, does_ski) VALUES (?, ?, ?, ?)');
        
        users.forEach(user => {
          stmt.run(user.first_name, user.last_name, user.age, user.does_ski, (err) => {
            if (err) {
              console.error('Error inserting user:', err);
            } else {
              console.log(`Inserted user: ${user.first_name} ${user.last_name}`);
            }
          });
        });

        stmt.finalize();
      } else {
        console.log('Database already contains data');
      }
    }
  });
});

db.close();