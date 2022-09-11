const path = require('path');

module.exports = {
    entry: "./js/Sum.js",
    output: {
        path: path.resolve(__dirname),
        filename: "__bundle.js"
    }
};