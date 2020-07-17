import { readFile } from 'fs-extra'

const readTemplateFiles = (
  templateFilePaths: string[],
): Promise<string[]> => Promise.all(
  templateFilePaths.map((templateFile) => readFile(templateFile, 'utf8')),
)

export default readTemplateFiles
