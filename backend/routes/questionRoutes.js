const express = require('express');
const { getQuestions,addQuestion  } = require('../controllers/questionController');
const router = express.Router();

router.get('/questions', getQuestions);
router.post('/questions', addQuestion);
module.exports = router;