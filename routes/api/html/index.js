const express = require('express');
const router = express.Router();

// Route for the homepage
router.get('/', (req, res) => {
    res.render('homepage', { title: 'Homepage' });
});

// Route for the dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Dashboard' });
});

// Route for the login page
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

// Route for the signup page
router.get('/signup', (req, res) => {
    res.render('signup', { title: 'Signup' });
});

module.exports = router;