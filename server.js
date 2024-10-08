const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//    res.send('<html><body><h1>Welcome to App Engine Deployment</h1></body></html>');
//});

//app.get('/', (req, res) => {
//    res.send('Hello, CI/CD Pipeline with GitHub Actions!');
//});

app.get('/', (req, res) => {
    res.send('Hello, CI/CD Pipeline with Jenkins Server !!!');
});
  

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
