const { v4: uuidv4 } = require('uuid');

const seedUsers = [
  {
    id: uuidv4(),
    name: "John Smith",
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "Emma Johnson",
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "Michael Brown",
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "Sarah Davis",
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "David Wilson",
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "Lisa Anderson",
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "James Taylor",
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "Jennifer Martinez",
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "Robert Garcia",
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "Patricia Robinson",
    createdAt: new Date().toISOString()
  }
];

module.exports = seedUsers; 