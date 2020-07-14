export declare const ensureRoot: () => Promise<void>;
export declare const readTemplateFiles: (templatePath: string, templateFiles: string[]) => Promise<string[]>;
interface TemplateData {
    [key: string]: string;
}
export declare const evaluateTemplates: (templates: string[], data: TemplateData) => string[];
export declare const writeTemplates: (projectPath: string, files: string[], data: string[]) => Promise<void[]>;
declare const _default: (name: string) => Promise<void>;
export default _default;
//# sourceMappingURL=createStore.d.ts.map