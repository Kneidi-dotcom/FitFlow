import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Sequelize, DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';

// Initialize Express app
const app = express();
const port = 3000;

// Set up body-parser middleware
app.use(bodyParser.json());

// Set up Sequelize (replace with your own database configuration)
const sequelize = new Sequelize('FitFlow', 'username', 'password', {
  host: 'localhost',
  dialect: 'mssql',
  logging: false,
});

// Define User model
class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bodyweight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

// Sync the User model with the database
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// Register route
app.post('/api/register', async (req, res) => {
  const { username, birthdate, email, password, experience, size, bodyweight } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      birthdate,
      email,
      passwordHash,
      experience,
      size,
      bodyweight,
    });

    res.status(201).json({ message: 'User registered successfully', userId: newUser.get('id') });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});