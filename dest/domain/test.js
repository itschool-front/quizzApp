var quizzApp;
(function (quizzApp) {
    var domain;
    (function (domain) {
        var Test = (function () {
            function Test(questions, description, isPublic, startDate, endDate, isHidden, id, createdAt, updatedAt) {
                this.questions = questions;
                this.description = description;
                this.isPublic = isPublic;
                this.startDate = startDate;
                this.endDate = endDate;
                this.isHidden = isHidden;
                this.id = id;
                this.createdAt = createdAt;
                this.updatedAt = updatedAt;
            }
            Test.prototype.getAllQuestions = function () {
                return this.questions;
            };
            Test.prototype.addQuestion = function (question) {
                this.questions.push(question);
            };
            return Test;
        }());
        domain.Test = Test;
    })(domain = quizzApp.domain || (quizzApp.domain = {}));
})(quizzApp || (quizzApp = {}));
//# sourceMappingURL=test.js.map