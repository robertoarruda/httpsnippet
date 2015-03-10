var http = require("http");

var options = {
  "method": "GET",
  "hostname": "mockbin.com",
  "port": null,
  "path": "/request?",
  "headers": {}
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
  });
});

req.end();
