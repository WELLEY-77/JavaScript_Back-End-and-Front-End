class Comment {
    constructor(username, content) {
        this.username = username
        this.content = content
        this.date = new Date()
    }
}

module.exports = Comment