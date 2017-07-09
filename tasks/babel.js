const fs = require("fs");
const browserify = require("browserify");

let compile = () => {
    browserify('./app/src/js/app.js')
    .transform("babelify",
        {
            presets: ["es2015"]
        })
    .bundle()
    .pipe(fs.createWriteStream('./app/dist/app.js'));

    console.log('js complete');
};

setTimeout(() => compile(), 150);

