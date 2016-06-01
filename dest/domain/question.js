var quizzApp;
(function (quizzApp) {
    var domain;
    (function (domain) {
        var Question = (function () {
            function Question(description, answerType, isHidden, test, pictureFd, id, createdAt, updatedAt, answers) {
                this.description = description;
                this.answerType = answerType;
                this.isHidden = isHidden;
                this.test = test;
                this.pictureFd = pictureFd;
                this.id = id;
                this.createdAt = createdAt;
                this.updatedAt = updatedAt;
                this.answers = answers;
            }
            Question.prototype.getAllAnswers = function () {
                return this.answers;
            };
            Question.prototype.addAnswer = function (answer) {
                this.answers.push(answer);
            };
            Question.prototype.deleteAnswer = function (id) {
            };
            return Question;
        }());
        domain.Question = Question;
    })(domain = quizzApp.domain || (quizzApp.domain = {}));
})(quizzApp || (quizzApp = {}));
//# sourceMappingURL=question.js.map