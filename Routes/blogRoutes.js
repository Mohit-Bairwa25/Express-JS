const express = require('express');
const path = require('path');
const blogs = require('../Data/blogArticles');
const e = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Templates/blog.html'));
});

router.get('/blog', (req, res) => {
    blogs.forEach(e => {
        console.log(e.title)
    });
    res.sendFile(path.join(__dirname, '../Templates/blog.html'));
});

module.exports = router;
