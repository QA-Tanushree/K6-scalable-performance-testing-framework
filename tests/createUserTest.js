//tests\createUserTest.js
import { createUser, getUser, updateUser, deleteUser } from '../pages/api/userApi.js';

// Load test data from JSON file
const userData = JSON.parse(open('../data/userData.json'));

export default function () {
    // Pick a random user from the data
    const randomUser = userData[Math.floor(Math.random() * userData.length)];

    // Step 1: Create a user
    let createResponse = createUser(randomUser);
    let userId = JSON.parse(createResponse.body).id;

    // Step 2: Fetch user details
    getUser(userId);

    // Step 3: Update the user's job title
    let updatedUser = { name: randomUser.name, job: "Updated Job" };
    updateUser(userId, updatedUser);

    // Step 4: Delete the user
    deleteUser(userId);
}
