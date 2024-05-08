/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-pseudo-class-prefix',
    Once(root) {
      root.walkRules(rule => {
        rule.selectors = rule.selectors.map(selector => {

          Array.forEach((opts), (prefix) => {
            let regVar = new RegExp(String.raw`/\b${prefix}(\w+)`, "g");
            // Replace each prefix with the respective pseudo-class
            selector = selector.replace(regVar, ':$1');
            return selector;
          });
        });
      })
    }
  }
}

module.exports.postcss = true
