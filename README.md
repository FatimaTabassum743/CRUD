# User CRUD API

A serverless CRUD API for managing users, built with Node.js, Serverless Framework, and AWS Lambda.

## API Endpoints

- `POST /users` - Create a new user
- `GET /users/{id}` - Get a user by ID
- `PUT /users/{id}` - Update a user
- `DELETE /users/{id}` - Delete a user
- `GET /users` - List all users

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Serverless Framework globally (if not already installed):
```bash
npm install -g serverless
```

3. Configure AWS credentials:
```bash
serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
```

## Development

To run the API locally:
```bash
npm run start
```

The API will be available at `http://localhost:4000`

## Testing

Run the test suite:
```bash
npm test
```

## Deployment

Deploy to AWS:
```bash
npm run deploy
```

## API Usage Examples

### Create User
```bash
curl -X POST http://localhost:4000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe"}'
```

### Get User
```bash
curl http://localhost:4000/users/{id}
```

### Update User
```bash
curl -X PUT http://localhost:4000/users/{id} \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe"}'
```

### Delete User
```bash
curl -X DELETE http://localhost:4000/users/{id}
```

### List Users
```bash
curl http://localhost:4000/users
```

## Notes

- This implementation uses in-memory storage for demonstration purposes. In a production environment, you should use a proper database like DynamoDB.
- CORS is enabled for all endpoints.
- Error handling is implemented for common scenarios.
- The API includes input validation for required fields. #   C R U D  
 