const fs = require("fs");
const browserify = require("browserify");

browserify("./src/js/app.js")
    .transform("babelify",
        {
            presets: ["es2015"]
        })
    .bundle()
    .pipe(fs.createWriteStream("./dist/app.js"));
