"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var getTargetPaths = function (templateFilePaths, name, type) { return templateFilePaths.map(function (path) {
    if (/\.test\.ts/.test(path)) {
        return path_1.join(process.cwd(), 'src', type, name + ".test.ts");
    }
    return path_1.join(process.cwd(), 'src', type, name + ".ts");
}); };
exports.default = getTargetPaths;
//# sourceMappingURL=getTargetPaths.js.map