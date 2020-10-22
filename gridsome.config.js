// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'El blog de Hugo',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {}
      }
    },
  ],
  transformers: {
    remark: {}
  }
}

