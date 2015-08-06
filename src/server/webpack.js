import WebpackDevServer from "webpack-dev-server";
import Webpack from "webpack";
import config from "../../webpack.config.dev";

var server = new WebpackDevServer(webpack(config), {
  // webpack-dev-server options
  publicPath: config.output.publicPath,
  hot: true,
  stats: { color: true }
});

server.listen(8081, "localhost", function () {});
