module.exports = {
    parseExclude: [],
    parseInclude: [],
    ignore: [
        {
            path: './yarn.lock'
        }
    ],
    question: [
        {
            type: 'input',
            message: 'please enter the author name.',
            name: 'author',
            default: '',
        },
        {
            type: 'confirm',
            message: 'use typescript?',
            name: 'useTs',
            default: true,
        },
    ],
    screener(answers) {
        const include = [];
        const exclude = [];
        if(!answers.useTs) {
            exclude.push(
                {
                    path: './tsconfig.json',
                },
                {
                    path: './src/add.ts',
                },
                {
                    path: './src/index.ts',
                },
                {
                    path: './test/index.test.ts',
                }
            )
        }else {
            exclude.push(
                {
                    path: './src/add.js',
                },
                {
                    path: './src/index.js',
                },
                {
                    path: './test/index.test.js',
                }
            )
        }
        return {
            include,
            exclude
        }
    }
}