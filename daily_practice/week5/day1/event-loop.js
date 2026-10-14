
const fs = require("fs");

console.log("1. Program started");

fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    console.log("3. File content:", data);
});

console.log("2. Program continues");
