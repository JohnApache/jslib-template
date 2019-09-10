module.exports = {
    parseExclude: [],
    parseInclude: [
        {
            path: './rollup.config.js'
        }
    ],
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
            type: 'confrim',
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
                    path: './babel.config.js',
                },
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