let path , webpackResolve;

path = require('path');
webpackResolve = (
  {
    alias: {
      app: path.resolve(__dirname, "public/"),
      actions: path.resolve(__dirname, "public/actions/"),
      adapters: path.resolve(__dirname, "public/adapters/"),
      components: path.resolve(__dirname, "public/component/"),
      containers: path.resolve(__dirname, "public/containers/"),
      protocols: path.resolve(__dirname, "public/protocols/"),
      controllers: path.resolve(__dirname, "public/controllers/"),
      reducers: path.resolve(__dirname, "public/reducers/"),
      stores: path.resolve(__dirname, "public/stores/"),
      supports: path.resolve(__dirname, "public/supports/"),
      stylesheets: path.resolve(__dirname, "public/stylesheets/"),
      models: path.resolve(__dirname, "public/models/")
    }
  }
);

module.exports = webpackResolve;
