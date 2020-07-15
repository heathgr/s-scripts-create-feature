"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var readTemplateFiles = function (templatePath, templateFiles) { return Promise.all(templateFiles.map(function (templateFile) {
    var targetPath = path_1.join(__dirname, '../../../template_files/', templatePath, templateFile);
    return fs_extra_1.readFile(targetPath, 'utf8');
})); };
exports.default = readTemplateFiles;
//# sourceMappingURL=readTemplateFiles.js.map