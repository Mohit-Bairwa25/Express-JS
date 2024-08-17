const express = require('express')
const path = require('path')
const serveIndex = require('serve-index');
const app = express()
const port = 3000

//Middleware
const myMiddleware = (req, res, next) => {
    console.log('Middleware executed');//VS Code Terminal
    next(); // Pass control to the next middleware or route handler
};

// Register the middleware before defining any routes
app.use(myMiddleware);

app.get('/',(req,res) => {
    res.send('Hello World')
})

//http://localhost:3000/enterName/Mohit
app.get('/enterName/:name',(req,res) => {
    res.send('Entered Name is : '+ req.params.name)
})

app.get('/about',(req,res) => {
    res.send('about')
})

app.get('/extra',(req,res) => {
    res.status(400)
    res.json({"harry":34}) //Install Json View To See this data in Browser
})
// To Serve file
app.get('/index',(req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
// To Serve Folder
app.use('/folderServe', express.static(path.join(__dirname, 'Documentation')));

// Enable directory listing for /folderServe
app.use('/folderServe', serveIndex(path.join(__dirname, 'Documentation')));

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}/`);
});