# K6-scalable-performance-testing-framework
The project is  supports scalable load testing, automation, API validation, and reporting. The multi-tool approach (K6 + Artillery) makes it flexible, and the modular structure (POM) ensures reusability.

## Project Overview
This repository contains a framework for running performance tests using K6, alongside a reusable test suite setup. It is designed to be easily scalable, making it suitable for various projects that need performance testing integrated into CI/CD pipelines.

The framework is equipped with scripts to run K6 tests, generate reports, and integrate with other tools like Artillery. This is ideal for teams looking to automate load testing and incorporate it into their development lifecycle.
Technologies Used
- K6 (https://k6.io/) - For load and performance testing
- Artillery (https://artillery.io/) - For API testing and load testing
- Node.js (https://nodejs.org/) - For managing test scripts and dependencies
- CI/CD Tools (https://www.jenkins.io/), GitHub Actions (https://github.com/features/actions) - To automate the testing process in CI/CD pipelines


### Setup Instructions
Follow these steps to get the project up and running on your local machine.
Prerequisites
Before you begin, ensure you have the following installed on your machine:
- Node.js (v14.0 or higher)
- Git
- K6
- Artillery

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/QA-Tanushree/k6-scalable-ci-test-framework.git
cd k6-scalable-ci-test-framework
```

2. Install project dependencies:

```bash
npm install
```

3. Install K6 globally (if not already installed):

```bash
npm install -g k6
```

4. Install Artillery globally (if not already installed):

```bash
npm install -g artillery
```
## Project Stracture 

![image](https://github.com/user-attachments/assets/9212f7b9-7cac-4bbe-a274-64fb6cb60c3d)

## Features
 ✅ Scalable Load Testing
  
🚀 Multi-Tool Integration (K6 & Artillery)
 
🔍 Comprehensive API Testing

📊 Automated Reporting & Analytics

🔄 Reusable & Modular Test Structure

🛠️ CI/CD & Automation Ready

🔥 Flexible Test Scenarios

🛡️ Security & Reliability Testing

### ✅ Features & How They Work in Your Project

##### 1️⃣ Scalable Load Testing

- Uses K6 for high-concurrency performance testing.
- Uses Artillery to simulate realistic user behavior.
- Supports ramp-up scenarios via phases in Artillery.

🔹 Example from tests/userScenarioTest.yml

```bash
phases:
  - duration: 60  # Run the test for 60 seconds
    arrivalRate: 5  # 5 new virtual users per second
```
✅ In 60 seconds, 300 users (5 * 60) will be simulated, testing system scalability.


##### 2️⃣ Multi-Tool Integration (K6 & Artillery)

- K6: Focuses on performance with detailed metrics.
- Artillery: Supports complex test flows and distributed load testing.

🔹 Example from package.json (Script Execution)

```bash
"scripts": {
  "test:k6": "npx k6 run tests/apiTest --out json=reports/k6-results.json",
  "test:artillery": "artillery run tests/userScenarioTest.yml"
}
```
✅ npm run test:k6 runs performance tests.
✅ npm run test:artillery runs scenario-based load tests.


##### 3️⃣ Comprehensive API Testing

- Covers the entire API lifecycle (Register, Login, CRUD operations).

- Uses parameterized testing (e.g., userData.json, loginData.json).

🔹 Example from tests/apiTest.js

```bash
let registerResponse = registerUser(registerData);
let createResponse = createUser(randomUser);
let updateResponse = updateUser(userId, updatedUser);
let deleteResponse = deleteUser(userId);
```
✅ Each function tests an API endpoint with assertions (e.g., check(response, { 'Status is 200': (r) => r.status === 200 })).


#### 4️⃣ Automated Reporting & Analytics
- K6 Reports → JSON (reports/k6-results.json).

- Artillery Reports → HTML (reports/artillery-report.html).

Can integrate into Grafana for real-time monitoring.

🔹 Example from package.json

```bash
"scripts": {
  "report:k6": "k6 stats reports/k6-results.json",
  "report:artillery": "artillery report --output reports/artillery-report.html reports/artillery-results.json"
}
```
✅ After running tests, reports can be viewed/analyzed easily.


##### 5️⃣ Reusable & Modular Test Structure

- Implements Page Object Model (POM) for API requests.
- Uses a configuration-driven approach.

🔹 Example from config/config.js

```bash
export const config = {
    baseUrl: 'https://reqres.in/api',
    headers: {
        'Content-Type': 'application/json'
    }
};
```
✅ APIs can be reused across tests by importing a single config file.


##### 6️⃣ CI/CD & Automation Ready
The framework is designed to be integrated into a CI/CD pipeline. You can easily integrate the test scripts with CI tools like Jenkins, GitHub Actions, or GitLab CI.
### Example of a GitHub Actions setup
- Create a `.github/workflows/test.yml` file in your repository with the following content:

```yaml
name: Run K6 and Artillery tests

on: [push]

jobs:
  k6-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Node.js (Upgrade to v18)
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Install k6 (via Snap)
        run: sudo snap install k6

      - name: Run K6 tests
        run: npm run test:k6

      - name: Run Artillery tests
        run: npm run test:artillery
```

🔹 Example GitHub Actions Workflow (Future Integration)

✅ Tests automatically run whenever code is pushed.

##### 7️⃣ Flexible Test Scenarios
- Supports dynamic load profiles.

- Supports different authentication methods.

🔹 Example: Using Bearer Token
```bash
headers:
  Authorization: "Bearer {{ loginToken }}"
```
✅ Different auth methods (Basic Auth, JWT) can be tested dynamically.


##### 8️⃣ Security & Reliability Testing
- Simulates high-traffic spikes.

- Tests session handling & API resilience.

🔹 Example: Artillery Load Testing

```bash
arrivalRate: 5  # 5 new users per second
duration: 60  # Simulating 60 seconds of high traffic
```
✅ Can simulate thousands of concurrent users.

### Contributing
We welcome contributions to this project! To contribute, please fork the repository, create a feature branch, and submit a pull request with your changes.

Ensure that your changes are well-tested and follow the project's coding style.





