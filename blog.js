const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// To Serve Folder
app.use('/folderServe', express.static(path.join(__dirname, 'Static')));

// Import the routes
app.use('/', require(path.join(__dirname, 'Routes/blogRoutes')));

app.listen(port, () => {
  console.log(`Blog App is Running at http://localhost:${port}/`);
});
