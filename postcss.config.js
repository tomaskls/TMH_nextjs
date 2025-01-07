module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009"
        },
        stage: 3,
        features: {
          "custom-properties": false
        }
      }
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './app/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
          './node_modules/@nextui-org/theme/dist/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ["html", "body", /^nextui-/],
          deep: [/^(data-|aria-)/, /^group-/, /^peer-/],
          greedy: [/^dark:/, /^sm:/, /^md:/, /^lg:/, /^xl:/, /^2xl:/]
        }
      }
    ],
  ]
}