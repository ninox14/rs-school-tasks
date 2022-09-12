const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        open: true,
        host: 'localhost',
        contentBase: path.resolve(__dirname, '../dist'),
    },
};
