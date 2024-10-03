const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
}

// Change the current working directory to Logs
process.chdir(logsDir);

// Create log files
for (let i = 1; i <= 10; i++) {
    const logFileName = `log${i}.txt`;
    const content = `This is log file number ${i}.`;
    
    fs.writeFileSync(logFileName, content);
    console.log(`Created file: ${logFileName}`);
}