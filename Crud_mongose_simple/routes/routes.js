const express = require('express');
const router = express.Router();
const session=require('express-session');
const User = require('../models/users');
const multer = require('multer');

// Configuration de l'upload d'image (dossier de destination)
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

let upload = multer({
    storage: storage
}).single('image'); // image: nom de mon champ de fichier

//Get all users route
router.get('/', async (req, res) => {
    try {
        const users = await User.find().exec();
        // console.log(users);
        res.render('index', { users:users });
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});


router.get('/add', (req, res) => {
    res.render('add_users');
});

// Route pour insérer un utilisateur dans la base de données
router.post('/add', upload, (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image: req.file.filename
    });

    user.save()
        .then(() => {
            req.session.message = {
                type: 'success',
                message: "User added successfully!"
            };
            res.redirect('/');
        })
        .catch(err => {
            res.json({ message: err.message, type: 'danger' });
        });
});

module.exports = router;
