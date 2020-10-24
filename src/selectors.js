const keccak256 = require("keccak256");

const concatInputs = (inputs) => inputs.map(({ type }) => type).join(",");

const toSignature = ({ name, inputs }) => `${name}(${concatInputs(inputs)})`;

const toPairSignatureSelector = (signature) => [
  signature,
  keccak256(signature).toString("hex").slice(0, 8),
];

const isFunction = ({ type }) => type === "function";

const selectors = (artifact) => {
  const { abi } = artifact;

  const functionSignatures = abi.filter(isFunction).map(toSignature);

  const functionSignaturesAndSelectors = functionSignatures.map(
    toPairSignatureSelector
  );
  return functionSignaturesAndSelectors;
};

module.exports = selectors;
