const fs = require("fs");

const readArtifact = (path) => {
  const artifactRaw = fs.readFileSync(path);
  const artifact = JSON.parse(artifactRaw);
  return artifact;
};

module.exports = readArtifact;
