const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
//절대경로 따는 node에서 제공하는 모듈

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.vue'],
    },
    entry: {
        app: path.join(__dirname, 'main.js'),

    },
    module: {
        rules: [{
            test: /\.vue$/, //vue파일을 만났을땐
            use: 'vue-loader', //vue-loader가 처리해
        }, {
            test: /\.css$/,
            use: ['vue-style-loader',
            {
                loader: 'css-loader',
                options: {
                    esModule: false,
                }
            },            
        ],
        }
    ],
        //js가 아닌 내용이 들어올 때 webpack의 rules 부분에 추가해주는 loader가 js로 바꿔서 output 해줌
        //ex) .vue 파일은 js가 아니지만 vue-loader가 .vue를 만나면 내부적으로 js로 전환하여 output의 app.js로 합쳐줌
        //css img html 등등 각각에 맞는 loader 사용하면 js 파일 하나로 다 합쳐줌
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    },
};