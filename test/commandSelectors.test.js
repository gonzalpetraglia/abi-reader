const { selectors } = require("../src/index");
const { expect } = require("chai");

const pathToArtifactWithoutFunctions = `${__dirname}/mocks/artifacts/noFunction.json`;
const pathToERC20Artifact = `${__dirname}/mocks/artifacts/erc20.json`;
describe("Command selectors", function () {
  describe("GIVEN there is a file without functions", function () {
    describe("WHEN the selectors command is executed", function () {
      it("THEN the selectors are returned empty", async function () {
        expect(
          await selectors(pathToArtifactWithoutFunctions)
        ).to.be.deep.equal([]);
      });
    });
  });

  describe("GIVEN there is a file with the standard erc20", function () {
    describe("WHEN the selector command is executed", function () {
      it("THEN the selectors are returned as should", async function () {
        expect(await selectors(pathToERC20Artifact)).to.be.deep.equal([
          ["name()", "06fdde03"],
          ["approve(address,uint256)", "095ea7b3"],
          ["totalSupply()", "18160ddd"],
          ["transferFrom(address,address,uint256)", "23b872dd"],
          ["decimals()", "313ce567"],
          ["balanceOf(address)", "70a08231"],
          ["symbol()", "95d89b41"],
          ["transfer(address,uint256)", "a9059cbb"],
          ["allowance(address,address)", "dd62ed3e"],
        ]);
      });
    });
  });
});
