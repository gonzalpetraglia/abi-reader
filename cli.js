#!/usr/bin/env node

const package = require("./src/index");

const command = process.argv[2];

const fallbackCommand = () =>
  `
  Commmand not known. Usage: abi-reader <command> <extra-options>
  Commands available:
    - selectors <path-to-json>  Gets the selectors of the methods of the contract
    - topics-events <path-to-json>  Gets the topics of the events of the contract
    - getError <url-to-eth-json-rpc> <tx-hash> Get the error message with which a require failed in a contract
  `;

const commandToExecute = package[command] || fallbackCommand;

commandToExecute(...process.argv.slice(3)).then(console.log);
