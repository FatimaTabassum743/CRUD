const { v4: uuidv4 } = require('uuid');
const seedUsers = require('../utils/seedData');

// In-memory storage for users (replace with actual database in production)
const users = new Map();

// Initialize with seed data
seedUsers.forEach(user => {
  users.set(user.id, user);
});

// Response helper
const response = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
});

// Create user
const createUser = async (event) => {
  try {
    const { name } = JSON.parse(event.body);
    
    if (!name) {
      return response(400, { message: 'Name is required' });
    }

    const id = uuidv4();
    const user = {
      id,
      name,
      createdAt: new Date().toISOString(),
    };

    users.set(id, user);
    return response(201, user);
  } catch (error) {
    return response(500, { message: 'Internal server error' });
  }
};

// Get user by ID
const getUser = async (event) => {
  try {
    const { id } = event.pathParameters;
    const user = users.get(id);

    if (!user) {
      return response(404, { message: 'User not found' });
    }

    return response(200, user);
  } catch (error) {
    return response(500, { message: 'Internal server error' });
  }
};

// Update user
const updateUser = async (event) => {
  try {
    const { id } = event.pathParameters;
    const { name } = JSON.parse(event.body);

    if (!name) {
      return response(400, { message: 'Name is required' });
    }

    const user = users.get(id);
    if (!user) {
      return response(404, { message: 'User not found' });
    }

    const updatedUser = {
      ...user,
      name,
      updatedAt: new Date().toISOString(),
    };

    users.set(id, updatedUser);
    return response(200, updatedUser);
  } catch (error) {
    return response(500, { message: 'Internal server error' });
  }
};

// Delete user
const deleteUser = async (event) => {
  try {
    const { id } = event.pathParameters;
    const user = users.get(id);

    if (!user) {
      return response(404, { message: 'User not found' });
    }

    users.delete(id);
    return response(200, { message: 'User deleted successfully' });
  } catch (error) {
    return response(500, { message: 'Internal server error' });
  }
};

// List all users
const listUsers = async () => {
  try {
    const userList = Array.from(users.values());
    return response(200, userList);
  } catch (error) {
    return response(500, { message: 'Internal server error' });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  listUsers,
}; 