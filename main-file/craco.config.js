module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Add raw-loader for .md files so they can be imported as strings
            webpackConfig.module.rules.push({
                test: /\.md$/,
                use: 'raw-loader',
            });
            return webpackConfig;
        },
    },
};
