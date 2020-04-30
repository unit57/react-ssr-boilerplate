module.exports = api => {
  const isTest = api.env('test');
  const isDev = api.env('development');
  const isNode = api.caller(caller => caller && caller.target === 'node');

  const targets = {
    browsers: '> 0.25%, not dead'
  };

  if (isTest || isNode) {
    delete targets.browsers;
    targets.node = 'current';
  }

  return {
    sourceMaps: isDev,
    ignore: [/node_modules\/(?!debug)/],
    presets: [
      [
        '@babel/env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
          targets
        }
      ],
      '@babel/typescript',
      'airbnb',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread'
    ]
  };
};
