const selectors = require("./selectors");
const eventTopics = require("./eventTopics");
const readArtifact = require("./readArtifact");
const getError = require("./getError");

const wrapGetArtifact = (command) => (path) => command(readArtifact(path));

module.exports = {
  selectors: wrapGetArtifact(selectors),
  eventTopics: wrapGetArtifact(eventTopics),
  getError,
};
