"use strict";

module.exports.activity = function (parent) {
  var obj = {};
  obj.parent = parent;
  obj.meshServer = parent.parent;
  obj.debug = obj.meshServer.debug;

  // Minimal server hook so we can test a route
  obj.hook_setupHttpHandlers = function (app /*, express */) {
    app.get("/activity/", (req, res) => res.send("Activity plugin is installed (scaffold)."));
  };

  return obj;
};
