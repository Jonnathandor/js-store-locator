## Setup

You will need a webpack.dev.js file in the root of the Frontend directory, once is created fill it with these contents 
and enter your GOOGLE MAPS API KEY, the .gitignore has this file included

```
const { merge } = require("webpack-merge");
const { EnvironmentPlugin } = require("webpack");
const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development",
  plugins: [
    new EnvironmentPlugin({
      GOOGLE_MAPS_API_KEY: "",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);

```

This might be an stupid implementation but I did set up webpack so I do not have to worry about publishing my API KEY

* Run npm install inside the Frontend directory
* After installing the dependencies run 'npm run build-dev' to build your files and then 'npm start' to start webpack server and visit: http://localhost:8080/ 