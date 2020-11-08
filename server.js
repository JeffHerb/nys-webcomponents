const liveServer = require("live-server");

var params = {
    port: 8000,
    root: "dist",
    wait: 1000
};

liveServer.start(params);