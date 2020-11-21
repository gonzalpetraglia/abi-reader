# Eth Debugging Toolbox

This is a command line tool to help you debug things in a live environment when you are dealing with smart contracts in a Ethereum-like network.


## Possible subcommands

The commands are:

### Selectors

This produces an output where every method signature of the SmartContract is listed alongside its selector, this will help you understand which function was called based on the data of the function you are trying to debug.

Example:
`eth-debugging-toolbox selectors ./test/mocks/artifacts/erc20.json`
### Event Topics

This produces an output where every event signature of the SmartContract is listed alongside its first topic, this will help you identify the logs emitted for a given tx if you find the topics of any log(generally this can be accessed through any explorer)


Example:
`eth-debugging-toolbox eventTopics ./test/mocks/artifacts/erc20.json`
### Get Error

This command will give you the error message of a transaction which failed. The behaviour for an unfailed tx or a tx which failed without a message is indeterminate

`eth-debugging-toolbox eventTopics 0x0000000000000000000000000000000000000000000000000000000000000000 https://rinkeby.infura.io/v3/0123456789012345678`

## Installation for usage

To install this extension just run

`npm install -g eth-debugging-toolbox`

keep in mind that this was tested for the node version defined in .nvmrc

## Development

If you want to develop in this project you can clone the repository and install the dependencies using

`npm install`


Keep in mind that you should develop in the node version defined in .nvmrc, it is recommended that you use NVM for this and you can set the version using

`nvm use`

### Running the toolbox

To use this tool while developing it, just run 

`./cli.js <command> [ARGUMENTS]`

### Testing

In order to run the test you just have to run

`npm test`

### Linter

We are using eslint to lint the code in this project, to see if everything is ok according to it you just have to run

`npm run lint`



