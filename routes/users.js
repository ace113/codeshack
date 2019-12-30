const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Register page
router.get('/register', (req, res) => res.render('register'))

// Login page
router.get('/login', (req, res) => res.render('login'))

// register post
router.post('/register', async (req, res) => {
    const {name, email, password, address, password2 } = req.body;
    const newUser = await new User({
        name,
        email,
        password,
        address,
        password2
    })
    newUser.save()
    .then(user => {       
        res.redirect('/user/login');
    })
    .catch(err => console.log(err));

})


module.exports = router