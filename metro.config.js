const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Exclude temporary npm extraction directories (e.g. .react-native-screens-XXXXXXXX)
// that cause ENOENT crashes on Windows with FallbackWatcher
const existingBlockList = config.resolver.blockList;
config.resolver.blockList = [
  /node_modules[/\\]\.[^/\\]+[/\\]/,
  ...(Array.isArray(existingBlockList)
    ? existingBlockList
    : existingBlockList
    ? [existingBlockList]
    : []),
];

module.exports = config;
