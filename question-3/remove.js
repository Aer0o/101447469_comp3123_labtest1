const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    // Read the directory
    const files = fs.readdirSync(logsDir);

    // Output file names to delete
    console.log('Files to delete:');
    files.forEach(file => {
        console.log(file);
        // Remove each file
        fs.unlinkSync(path.join(logsDir, file));
    });

    // Remove the Logs directory
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}