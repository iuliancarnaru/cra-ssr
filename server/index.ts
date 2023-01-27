require("ignore-styles");

require("@babel/register")({
  ignore: [/node_modules/],
  presets: [
    "@babel/react",
    "@babel/typescript",
    ["@babel/env", { modules: false }],
  ],
});

require("./server.tsx");
