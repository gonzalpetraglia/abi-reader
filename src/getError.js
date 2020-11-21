const axios = require("axios");
const { chunk } = require("lodash");

const getDebugTraceDefault = async (txHash, baseURL) => {
  const api = axios.create({
    baseURL,
    timeout: 100000,
  });

  const response = await api.post("/", {
    jsonrpc: "2.0",
    method: "debug_traceTransaction",
    params: [txHash],
    id: 0,
  });
  return response.data;
};

const hexToAscii = (hex) =>
  chunk(hex, 2)
    .map((byteInHex) => String.fromCharCode(parseInt(byteInHex.join(""), 16)))
    .join("");

module.exports = async (
  txHash,
  baseURL,
  getDebugTrace = getDebugTraceDefault
) => {
  const response = await getDebugTrace(txHash, baseURL);
  return hexToAscii(response.result.result);
};
