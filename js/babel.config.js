/* eslint-disable */

module.exports = api => {
  api.cache(false);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ]
    ]
  }
}
