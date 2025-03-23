//scripts\generateReport.js
import fs from 'fs';

// Define file paths
const k6Results = './reports/k6-results.json';
const artilleryResults = './reports/artillery-results.json';
const outputReport = './reports/final-report.json';

// Function to read and parse JSON data
const readJsonFile = (filePath) => {
  try {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error(`Error reading or parsing file: ${filePath}`, error);
    return null;
  }
};

// Read and parse the data
const k6Data = readJsonFile(k6Results);
const artilleryData = readJsonFile(artilleryResults);

if (k6Data && artilleryData) {
  // Combine the results
  const finalReport = {
    k6: k6Data.metrics,
    artillery: artilleryData.aggregate,
  };

  // Write the final report
  fs.writeFileSync(outputReport, JSON.stringify(finalReport, null, 2));
  console.log('✅ Test report generated:', outputReport);
} else {
  console.log('⚠️ Could not generate report due to invalid input data.');
}
