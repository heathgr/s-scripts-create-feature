"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-expressions */
var yargs_1 = __importDefault(require("yargs"));
var createStore_1 = __importDefault(require("./commands/createStore"));
exports.default = yargs_1.default.command('store', 'Create a new store.', function (args) { return args.demandCommand(1); }, function (argsv) {
    var storeName = argsv._[1];
    createStore_1.default(storeName);
})
    .demandCommand(1)
    .argv;
//# sourceMappingURL=index.js.map