import sqlite3 from 'sqlite3';
import path from 'path';

// Set the path to the SQLite database file
const dbPath = path.resolve('./users.db');
const db = new sqlite3.Database(dbPath);

// Utility function to handle database queries
const query = (sql: string, params: any[] = []) => {
  return new Promise<any[]>((resolve, reject) => {
    db.all(sql, params, (err: Error | null, rows: any[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// Function to get all users from the database
export const getUsers = async () => {
  return await query('SELECT * FROM users');
};

// Function to get a user by ID
export const getUserById = async (id: number) => {
  return await query('SELECT * FROM users WHERE id = ?', [id]);
};

// Function to create a new user
export const createUser = async (firstName: string, lastName: string, age: number, doesSki: boolean) => {
  return new Promise<void>((resolve, reject) => {
    const stmt = db.prepare('INSERT INTO users (first_name, last_name, age, does_ski) VALUES (?, ?, ?, ?)');
    stmt.run(firstName, lastName, age, doesSki, function (this: sqlite3.RunResult, err: Error | null) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
    stmt.finalize();
  });
};

// Function to update a user by ID
export const updateUser = async (id: number, firstName: string, lastName: string, age: number, doesSki: boolean) => {
  return new Promise<void>((resolve, reject) => {
    const stmt = db.prepare(
      'UPDATE users SET first_name = ?, last_name = ?, age = ?, does_ski = ? WHERE id = ?'
    );
    stmt.run(firstName, lastName, age, doesSki, id, function (this: sqlite3.RunResult, err: Error | null) {
      if (err) {
        reject(err);
      } else if (this.changes === 0) {
        reject(new Error('No rows updated'));
      } else {
        resolve();
      }
    });
    stmt.finalize();
  });
};

// Function to delete a user by ID
export const deleteUser = async (id: number) => {
  return new Promise<void>((resolve, reject) => {
    const stmt = db.prepare('DELETE FROM users WHERE id = ?');
    stmt.run(id, function (this: sqlite3.RunResult, err: Error | null) {
      if (err) {
        reject(err);
      } else if (this.changes === 0) {
        reject(new Error('No rows deleted'));
      } else {
        resolve();
      }
    });
    stmt.finalize();
  });
};

// Function to initialize the database
export const initDB = () => {
  return new Promise<void>((resolve, reject) => {
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          first_name TEXT NOT NULL,
          last_name TEXT NOT NULL,
          age INTEGER NOT NULL,
          does_ski BOOLEAN NOT NULL
        )
      `, (err: Error | null) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });
};

// Close the database connection (used for cleanup or when shutting down the app)
export const closeDB = () => {
  db.close((err: Error | null) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed');
    }
  });
};
