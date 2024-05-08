/**
 * @type {import('postcss').PluginCreator}
 */

module.exports = (opts = []) => { // Assuming opts is an array of prefixes
  return {
    postcssPlugin: 'postcss-pseudo-class-prefix',
    Once(root) {
      root.walkRules(rule => {
        rule.selectors = rule.selectors.map(selector => {
          // Process each prefix
          opts.forEach(prefix => {
            let regVar = new RegExp(`\\b${prefix}(\\w+)`, "g"); // Corrected RegExp
            selector = selector.replace(regVar, `.$1:${prefix}`); // Correct placement and corrected logic
          });
          return selector; // Return should be here, after all replacements
        });
      });
    }
  };
};

module.exports.postcss = true; // This is fine if using CommonJS
