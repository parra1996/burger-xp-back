const express = require('express');
const router = express.Router();

const commentController = require('../controllers/ComentarioController');
const isAdmin = require('../middlewares/isAdmin');

router.post('/makeComment', commentController.makeComment);

router.post('/commentByID', isAdmin, commentController.getCommentByID);


module.exports = router;
