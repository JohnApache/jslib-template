module.exports = {
    parseExclude: [],
    parseInclude: [],
    ignore: [],
    question: [
        {
            type: 'input',
            message: 'please enter the author name.',
            name: 'author',
            default: '',
        },
    ],
    screener(answers) {
        const include = [];
        const exclude = [];
        return {
            include,
            exclude
        }
    }
}