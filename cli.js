#!/usr/bin/env node

const package = require("./src/index");

const command = process.argv[2];

const fallbackCommand = () =>
  "Commmand not known. Usage: abi-reader <command> <path>";

const commandToExecute = package[command] || fallbackCommand;

console.log(commandToExecute(process.argv[3]));
