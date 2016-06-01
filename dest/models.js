var quizzApp;
(function (quizzApp) {
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        return User;
    }());
    quizzApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    quizzApp.Note = Note;
})(quizzApp || (quizzApp = {}));
//# sourceMappingURL=models.js.map