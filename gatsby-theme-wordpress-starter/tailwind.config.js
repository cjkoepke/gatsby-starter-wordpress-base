const deepmerge = require('deepmerge');
const fs = require('fs');

const getConfig = () => {
  const defaults = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1024px',
      },
    },
    variants: {},
    plugins: [],
    future: {
      removeDeprecatedGapUtilities: true,
    }
  };
  
  const childTheme = `${process.cwd}/tailwind.config.js`;
  if ( fs.existsSync(childTheme) ) {
    return deepmerge(defaults, childTheme);
  }

  return defaults;
};

module.exports = getConfig();
