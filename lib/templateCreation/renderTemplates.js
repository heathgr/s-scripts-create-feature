"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handlebars_1 = __importDefault(require("handlebars"));
var toCaptialized = function (str) {
    if (!str) {
        return '';
    }
    return str[0].toUpperCase() + str.substring(1);
};
var renderTemplates = function (templates, data) {
    handlebars_1.default.registerHelper('toInterfaceName', function (str) { return toCaptialized(str) + "State"; });
    handlebars_1.default.registerHelper('toStoreName', function (str) { return str + "Store"; });
    handlebars_1.default.registerHelper('toStateName', function (str) { return str + "State"; });
    handlebars_1.default.registerHelper('toUpdaterName', function (str) { return str + "Updater"; });
    handlebars_1.default.registerHelper('toInitialStateName', function (str) { return "initial" + toCaptialized(str) + "State"; });
    handlebars_1.default.registerHelper('toCapitalized', function (str) { return toCaptialized(str); });
    return templates.map(function (template) {
        var renderer = handlebars_1.default.compile(template);
        return renderer(data);
    });
};
exports.default = renderTemplates;
//# sourceMappingURL=renderTemplates.js.map