//tests\loginTest.js
import { loginUser } from '../pages/api/userApi.js';

// Load login data from JSON file
const loginData = JSON.parse(open('../data/loginData.json'));

export default function () {
    // Step 1: Perform login
    let loginResponse = loginUser(loginData);

    // Step 2: Extract and log the token
    let token = JSON.parse(loginResponse.body).token;
    console.log(`User token: ${token}`);
}
