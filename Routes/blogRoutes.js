const express = require('express');
const path = require('path');
const blogs = require('../Data/blogArticles');
const e = require('express');
const router = express.Router();

const { create } = require('express-handlebars');
const { title } = require('process');
const hbs = create({ /* config */ });
const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/blog', (req, res) => {
    res.render('blogHome', {blogs:blogs});
});

router.get('/blogPost/:slug', (req, res) => {
    myBlog = blogs.filter((e)=>{
       return e.slug==req.params.slug;
    })
    res.render('blogPage', {
        title:myBlog[0].title,
        content:myBlog[0].content
    });
});

module.exports = router;