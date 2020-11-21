const { eventTopics } = require("../src/index");
const { expect } = require("chai");

const pathToArtifactWithoutFunctions = `${__dirname}/mocks/artifacts/noFunction.json`;
const pathToERC20Artifact = `${__dirname}/mocks/artifacts/erc20.json`;
describe("Command eventTopics", function () {
  describe("GIVEN there is a file without functions", function () {
    describe("WHEN the eventTopics command is executed", function () {
      it("THEN the eventTopics are returned empty", async function () {
        expect(
          await eventTopics(pathToArtifactWithoutFunctions)
        ).to.be.deep.equal([]);
      });
    });
  });

  describe("GIVEN there is a file with the erc20", function () {
    describe("WHEN the eventTopics command is executed", function () {
      it("THEN the eventTopics are returned should", async function () {
        expect(await eventTopics(pathToERC20Artifact)).to.be.deep.equal([
          [
            "Approval(address,address,uint256)",
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          ],
          [
            "Transfer(address,address,uint256)",
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          ],
        ]);
      });
    });
  });
});
