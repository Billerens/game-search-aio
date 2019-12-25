const app = require("./app");
const PORT = 8000;
const HOST = "0.0.0.0";

server = app.listen(PORT, err => {
  if (err) console.error(err);
});

server.setTimeout(5000000);
console.log(`Running on http://${HOST}:${PORT}`);
