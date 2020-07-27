"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var types_1 = require("./types");
var getFileName = function (name, type, isTest) {
    var extesnsion = type === types_1.TemplateType.COMPONENT ? '.tsx' : '.ts';
    var test = isTest ? '.test' : '';
    switch (type) {
        case types_1.TemplateType.COMPONENT: {
            return "" + (name[0].toUpperCase() + name.substring(1)) + test + extesnsion;
        }
        case types_1.TemplateType.STORE: {
            return name + "Store" + test + extesnsion;
        }
        case types_1.TemplateType.UPDATER: {
            return name + "Updater" + test + extesnsion;
        }
        default: {
            return name;
        }
    }
};
var getTargetPaths = function (templateFilePaths, name, type) { return templateFilePaths.map(function (path) {
    var isTest = /\.test\.ts/.test(path);
    var fileName = getFileName(name, type, isTest);
    return path_1.join(process.cwd(), 'src', type, "" + fileName);
}); };
exports.default = getTargetPaths;
//# sourceMappingURL=getTargetPaths.js.map