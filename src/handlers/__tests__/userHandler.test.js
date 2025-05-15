const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  listUsers,
} = require('../userHandler');

describe('User Handler Tests', () => {
  let createdUserId;

  test('should create a new user', async () => {
    const event = {
      body: JSON.stringify({
        name: 'John Doe',
      }),
    };

    const response = await createUser(event);
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(201);
    expect(body).toHaveProperty('id');
    expect(body.name).toBe('John Doe');
    expect(body).toHaveProperty('createdAt');

    createdUserId = body.id;
  });

  test('should fail to create user without name', async () => {
    const event = {
      body: JSON.stringify({}),
    };

    const response = await createUser(event);
    expect(response.statusCode).toBe(400);
  });

  test('should get user by id', async () => {
    const event = {
      pathParameters: {
        id: createdUserId,
      },
    };

    const response = await getUser(event);
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body.id).toBe(createdUserId);
    expect(body.name).toBe('John Doe');
  });

  test('should return 404 for non-existent user', async () => {
    const event = {
      pathParameters: {
        id: 'non-existent-id',
      },
    };

    const response = await getUser(event);
    expect(response.statusCode).toBe(404);
  });

  test('should update user', async () => {
    const event = {
      pathParameters: {
        id: createdUserId,
      },
      body: JSON.stringify({
        name: 'Jane Doe',
      }),
    };

    const response = await updateUser(event);
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body.id).toBe(createdUserId);
    expect(body.name).toBe('Jane Doe');
    expect(body).toHaveProperty('updatedAt');
  });

  test('should fail to update non-existent user', async () => {
    const event = {
      pathParameters: {
        id: 'non-existent-id',
      },
      body: JSON.stringify({
        name: 'Jane Doe',
      }),
    };

    const response = await updateUser(event);
    expect(response.statusCode).toBe(404);
  });

  test('should list all users', async () => {
    const response = await listUsers();
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
  });

  test('should delete user', async () => {
    const event = {
      pathParameters: {
        id: createdUserId,
      },
    };

    const response = await deleteUser(event);
    expect(response.statusCode).toBe(200);

    // Verify user is deleted
    const getResponse = await getUser(event);
    expect(getResponse.statusCode).toBe(404);
  });

  test('should fail to delete non-existent user', async () => {
    const event = {
      pathParameters: {
        id: 'non-existent-id',
      },
    };

    const response = await deleteUser(event);
    expect(response.statusCode).toBe(404);
  });
}); 