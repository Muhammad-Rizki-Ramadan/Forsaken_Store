import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World!"
    });
});

app.use("*", (req, res) => {
    res.status(404).json({
        message: "Page not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});