# K6 Scalable CI Test Framework
A scalable and reusable test framework designed for continuous integration (CI) pipelines. It leverages K6 (https://k6.io/) for load testing and integrates with CI tools for seamless automation.
Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
- [Running Tests](#running-tests)
  - [K6 Tests](#k6-tests)
  - [Artillery Tests](#artillery-tests)
- [CI/CD Integration](#cicd-integration)
- [Contributing](#contributing)
- [License](#license)

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
## Project Stracture 
![image](https://github.com/user-attachments/assets/c0eb4b19-a0da-4a26-86fb-65c1d3c4fc53)

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
Running Tests
### K6 Tests
Run K6 tests using the following script:
```bash
npm run test:k6
```
This will execute the K6 load test defined in `tests/createUserTest.js` and output the results to `reports/k6-results.json`.

### Artillery Tests
Run Artillery tests with the following script:
```bash
npm run test:artillery
```
This will execute the Artillery load test defined in `tests/userScenarioTest.yml` and output the results to `reports/artillery-results.json`.

Generate Test Reports
To generate test reports, run:
```bash
npm run report:k6   # For K6 report
npm run report:artillery  # For Artillery report
```
This will process the results from `reports/k6-results.json` and `reports/artillery-results.json`, generating HTML reports for both.
Run All Tests
To run all tests (K6 and Artillery) together:
```bash
npm run test:all
```
Generate All Reports
To generate reports for all tests:
```bash
npm run report:all
```
CI/CD Integration
The framework is designed to be integrated into a CI/CD pipeline. You can easily integrate the test scripts with CI tools like Jenkins, GitHub Actions, or GitLab CI.

### Example of a GitHub Actions setup
1. Create a `.github/workflows/test.yml` file in your repository with the following content:

```yaml
name: Run K6 and Artillery tests

on: [push]

jobs:
  k6-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm run test:k6
      - run: npm run test:artillery
```
