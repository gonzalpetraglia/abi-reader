const selectors = require("./selectors");
const readArtifact = require("./readArtifact");

const wrapGetArtifact = (command) => (path) => command(readArtifact(path));

module.exports = {
  selectors: wrapGetArtifact(selectors),
};
