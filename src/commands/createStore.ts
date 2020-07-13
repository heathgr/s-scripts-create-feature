import { join } from 'path'
import {
  pathExists, readFile, ensureFile, writeFile,
} from 'fs-extra'
import handlebars from 'handlebars'

export const ensureRoot = async (): Promise<void> => {
  const cwd = process.cwd()
  const packageJsonExists = await pathExists(join(cwd, 'package.json'))
  const srcExists = await pathExists(join(cwd, '/src'))

  if (!packageJsonExists || !srcExists) {
    throw new Error('s-scripts must be run in the project root.')
  }
}

interface TemplateData {
  [key: string]: string,
}

export const evaluateTemplate = (template: string, data: TemplateData): string => {
  const renderer = handlebars.compile(template)

  return renderer(data)
}

export default async (name: string): Promise<void> => {
  console.log('Creating store: ', __dirname)
  try {
    await ensureRoot()

    const storeTemplatePath = join(__dirname, '../../template_files/store.ts')
    const storeTemplate = await readFile(storeTemplatePath, 'utf8')
    const evaluatedTemplated = evaluateTemplate(storeTemplate, { name })
    const targetDirectory = join(process.cwd(), `/src/stores/${name}.ts`)

    await ensureFile(targetDirectory)
    await writeFile(targetDirectory, evaluatedTemplated, 'utf8')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
}
