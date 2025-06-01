const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@":        path.resolve(__dirname, "."),                    //  ➜  ./lib/utils.ts
      "@shadcn":  path.resolve(__dirname, "src/shadcn_components") //  ➜  ./src/shadcn_components/…
      // add more if you like: "@lib": path.resolve(__dirname, "lib")
    },
  },
  // keep tests happy too
  jest: {
    configure: {
      moduleNameMapper: {
        "^@/(.*)$":       "<rootDir>/$1",
        "^@shadcn/(.*)$": "<rootDir>/src/shadcn_components/$1"
      },
    },
  },
};
