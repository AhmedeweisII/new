const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.mashrook.somee.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});

/*
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://abdo6755-001-site1.anytempurl.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // Remove the '/api' prefix when forwarding requests
        },
      },
    },
  },
  transpileDependencies: ['@vue/cli-plugin-babel'],
});

*/
