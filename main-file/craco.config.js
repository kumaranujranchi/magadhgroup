module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Find the oneOf rule inside CRA's webpack configuration
            const oneOfRule = webpackConfig.module.rules.find(
                (rule) => rule.oneOf !== undefined
            );
            if (oneOfRule) {
                // Add the .md loader inside oneOf, before the fallback loader
                oneOfRule.oneOf.unshift({
                    test: /\.md$/,
                    type: 'asset/source',
                });
            } else {
                // Fallback in case CRA structure changes
                webpackConfig.module.rules.push({
                    test: /\.md$/,
                    type: 'asset/source',
                });
            }
            return webpackConfig;
        },
    },
};
