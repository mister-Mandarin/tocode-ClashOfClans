const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/Tocode-ClashOfClans/'
});

// подробнее про конфиг тут https://cli.vuejs.org/ru/config/index.html#vue-config-js
