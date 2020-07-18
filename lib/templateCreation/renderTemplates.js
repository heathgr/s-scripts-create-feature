"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handlebars_1 = __importDefault(require("handlebars"));
var renderTemplates = function (templates, data) {
    handlebars_1.default.registerHelper('toInterfaceName', function (str) { return "" + str[0].toUpperCase() + str.substring(1) + "State"; });
    return templates.map(function (template) {
        var renderer = handlebars_1.default.compile(template);
        return renderer(data);
    });
};
exports.default = renderTemplates;
//# sourceMappingURL=renderTemplates.js.map