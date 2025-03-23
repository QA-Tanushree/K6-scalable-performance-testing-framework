//tests\registerTest.js
import { registerUser } from '../pages/api/userApi.js';

// Load registration data from JSON file
const registerData = JSON.parse(open('../data/registerData.json'));

export default function () {
    // Step 1: Perform user registration
    let registerResponse = registerUser(registerData);

    // Step 2: Extract and log the ID and token
    let responseBody = JSON.parse(registerResponse.body);
    console.log(`User ID: ${responseBody.id}, Token: ${responseBody.token}`);
}
