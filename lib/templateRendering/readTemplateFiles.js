"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var readTemplateFiles = function (templateFilePaths) { return Promise.all(templateFilePaths.map(function (templateFile) { return fs_extra_1.readFile(templateFile, 'utf8'); })); };
exports.default = readTemplateFiles;
//# sourceMappingURL=readTemplateFiles.js.map