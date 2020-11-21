const { getError } = require("../src/index");
const { expect } = require("chai");
const debugTraceResponse = require("./mocks/debugTraceResponse.json");
describe("Command getError", function () {
  describe("GIVEN there is a transaction that failed with a message", function () {
    describe("WHEN the getError command is executed", function () {
      it("THEN the error is included in the response", async function () {
        expect(
          await getError("txHash", "baseURL", () => debugTraceResponse)
        ).to.include("previous proposal must be processed");
      });
    });
  });
});
