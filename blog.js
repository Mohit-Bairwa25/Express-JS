const express = require('express');
const path = require('path');
const blogRoutes = require('./Routes/blogRoutes');
const { create } = require('express-handlebars');

const app = express();

// Setup Handlebars as view engine
const hbs = create({ defaultLayout: 'main' }); // Specify default layout
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use('/', blogRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});