const sass = require('node-sass');
const fs = require('fs');

const Config = {
    cssInput: './src/scss/styles.scss',
    cssOutput: './dist/styles.css'
};

sass.render(
    {
    file: Config.cssInput,
    outFile: './dist/styles.css',
    outputStyle: 'compressed'
    },
    (error, result) => {
        if (error) {
            console.log(error.status);
            console.log(error.column);
            console.log(error.message);
            console.log(error.line);
        } else {
            fs.writeFile('./dist/styles.css', result.css, () => {
                console.log(result.stats);
            });
        }
    }
);