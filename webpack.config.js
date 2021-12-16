const path = require("path");  // eslint-disable-line
const WorkerUrlPlugin = require("worker-url/plugin");  // eslint-disable-line

module.exports = {
    entry: {
        Vircadia: "./src/Vircadia.ts"
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    experiments: {
        outputModule: true
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        library: {
            type: "module"
        },
        module: true,
        clean: true
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    plugins: [ new WorkerUrlPlugin() ],  // eslint-disable-line

    module: {
        rules: [

            // '.ts' and '.tsx' files are handled by 'ts-loader'.
            { test: /\.tsx?$/u, loader: "ts-loader" },

            // '.js' files have sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/u, loader: "source-map-loader" }

        ]
    }
};
