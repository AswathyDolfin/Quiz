const Question = require('../models/QuestionSchema');

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.addQuestion = async (req, res) => {
    try {
      const { text, options, correctIndex, explanation } = req.body;
  
      const newQuestion = new Question({
        text,
        options,
        correctIndex,
        explanation,
      });
  
      const savedQuestion = await newQuestion.save();
      res.status(201).json(savedQuestion);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  