const fs = require('fs');
module.exports = (data) => {
    
    // Source the Tailwind config file from the starter if not present (removed) from the child theme.
    const path = fs.existsSync(`${data.cwd}/tailwind.config.js`)
        ? data.cwd
        : __dirname;
        
    return {
        plugins: [
            require('postcss-import'),
            require('tailwindcss')(`${path}/tailwind.config.js`),
        ]
    };
};