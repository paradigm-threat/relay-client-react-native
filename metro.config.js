const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const projectRoot = __dirname;

const config = {
    projectRoot,
    resolver: {
        nodeModulesPaths: [
            path.resolve(projectRoot, 'node_modules'),
        ],
        extraNodeModules: {
            '@clevertree/shared': path.resolve(__dirname, './src/shared'),
        },
    },
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), config);
