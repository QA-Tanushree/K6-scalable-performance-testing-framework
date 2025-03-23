//tests\apiTest.js
import { createUser, getUser, updateUser, deleteUser, loginUser, registerUser } from '../pages/api/userApi.js';

// Load test data from JSON files
const userData = JSON.parse(open('../data/userData.json'));
const loginData = JSON.parse(open('../data/loginData.json'));
const registerData = JSON.parse(open('../data/registerData.json'));  // Correctly load registerData from JSON

export default function () {
    // Step 1: Register a new user
    let registerResponse = registerUser(registerData);  // Use registerData from JSON
    let registerBody = JSON.parse(registerResponse.body);
    console.log(`Registered User ID: ${registerBody.id}, Token: ${registerBody.token}`);

    // Step 2: Perform login
    let loginResponse = loginUser(loginData);
    let token = JSON.parse(loginResponse.body).token;
    console.log(`Login successful. Token: ${token}`);

    // Step 3: Pick a random user and create an account
    const randomUser = userData[Math.floor(Math.random() * userData.length)];
    let createResponse = createUser(randomUser);
    let userId = JSON.parse(createResponse.body).id;

    // Step 4: Fetch user details
    getUser(userId);

    // Step 5: Update user information
    let updatedUser = { name: randomUser.name, job: "Updated Job" };
    updateUser(userId, updatedUser);

    // Step 6: Delete user
    deleteUser(userId);
}
