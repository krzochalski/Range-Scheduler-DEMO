const sass = require('node-sass');
const fs = require('fs');

const Config = {
    cssInput: './scss/styles.scss',
    cssOutput: './css/styles.css'
};

sass.render(
    {
    file: Config.cssInput,
    outFile: './css/styles.css',
    outputStyle: 'compressed'
    },
    (error, result) => {
        if (error) {
            console.log(error.status);
            console.log(error.column);
            console.log(error.message);
            console.log(error.line);
        } else {
            fs.writeFile('./css/styles.css', result.css, () => {
                console.log(result.stats);
            });
        }
    }
);