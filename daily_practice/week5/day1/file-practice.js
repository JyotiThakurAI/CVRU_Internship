
const fs = require("fs");

// Write data into a file
fs.writeFile("student.txt", "Welcome to Node.js!", (err) => {
    if (err) throw err;

    console.log("File written successfully!");

    // Read data from the file
    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) throw err;

        console.log("File content:", data);
    });
});
