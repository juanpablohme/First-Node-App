const express =  require('express');
const router = express.Router();

/*----- HOME -----*/
router.get('/', (req, res) => {
    res.render('index.html', { title: 'First Website' });
});


/*----- CONTACT -----*/
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact' });
});

module.exports = router;