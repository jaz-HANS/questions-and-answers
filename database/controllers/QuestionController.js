const { Question } = require('../models/QuestionModel.js');

const QuestionController = {
    getAllQuestions: (product, callback) => {
        Question.find({product_id: product.product_id}, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data);
            }
        });
    },
    create: (product, body, callback) => {
        const newQuestion = new Question(body);
        newQuestion.save((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        });
    }
}

module.exports = {
    QuestionController
};