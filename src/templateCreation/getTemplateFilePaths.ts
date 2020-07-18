import { join } from 'path'
import { readdir } from 'fs-extra'

const getTemplateFilePaths = async (type: string): Promise<string[]> => {
  const templateDirectory = join(__dirname, '../../template_files', type)
  const templateFiles = await readdir(templateDirectory)

  return templateFiles.map((templateFile) => join(templateDirectory, templateFile))
}

export default getTemplateFilePaths
