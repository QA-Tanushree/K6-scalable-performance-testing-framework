//tests\apiTest.js
import { createUser, getUser, updateUser, deleteUser, loginUser,registerData } from '../pages/api/userApi.js';

const userData = JSON.parse(open('../data/userData.json'));
const loginData = JSON.parse(open('../data/loginData.json'));
const registerData = JSON.parse(open('../data/registerData.json'));

export default function () {
    // Step 1: Register a new user
    let registerResponse = registerUser(registerData);
    let registerBody = JSON.parse(registerResponse.body);
    console.log(`Registered User ID: ${registerBody.id}, Token: ${registerBody.token}`);

    // Step 1: Perform login
    let loginResponse = loginUser(loginData);
    let token = JSON.parse(loginResponse.body).token;

    console.log(`Login successful. Token: ${token}`);

    // Step 2: Pick a random user and create an account
    const randomUser = userData[Math.floor(Math.random() * userData.length)];
    let createResponse = createUser(randomUser);
    let userId = JSON.parse(createResponse.body).id;

    // Step 3: Fetch user details
    getUser(userId);

    // Step 4: Update user information
    let updatedUser = { name: randomUser.name, job: "Updated Job" };
    updateUser(userId, updatedUser);

    // Step 5: Delete user
    deleteUser(userId);
}
