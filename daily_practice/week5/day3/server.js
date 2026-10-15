
const express = require("express");
const app = express();

app.use(express.json());

app.get("/user", (req, res) => {
res.json({
name: "Rahul",
age: 25,
city: "Mumbai",
});
});

app.get("/users/:id", (req, res) => {
const userId = req.params.id;
res.send(`User ID is: ${userId}`);
});


// Root route
app.get("/", (req, res) => {
    res.send("Welcome to Express.js in Node.js!");
});

app.get("/hello", (req, res) => {
res.send("Hello from GET route!");
});

app.post("/submit", (req, res) => {
res.send("Data received using POST!");
});

app.put("/update", (req, res) => {
res.send("Data updated using PUT!");
});

app.delete("/remove", (req, res) => {
res.send("Data deleted!");
});

// JSON API
app.get("/api/user", (req, res) => {
    res.json({
        id: 1,
        name: "Ananya",
        role: "Intern",
        skills: ["Node.js", "Express.js", "Git"]
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/about", (req, res) => {
    res.send("This is the About page!");
});


app.get("/search", (req, res) => {
const query = req.query;
res.json(query);
});

