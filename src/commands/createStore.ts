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

export const readTemplateFiles = (
  templatePath: string,
  templateFiles: string[],
): Promise<string[]> => Promise.all(
  templateFiles.map((templateFile) => {
    const targetPath = join(__dirname, '../../template_files/', templatePath, templateFile)

    return readFile(targetPath, 'utf8')
  }),
)

interface TemplateData {
  [key: string]: string,
}

export const evaluateTemplates = (templates: string[], data: TemplateData): string[] => {
  handlebars.registerHelper('toInterfaceName', (str: string) => `${str[0].toUpperCase()}${str.substring(1)}State`)

  return templates.map((template) => {
    const renderer = handlebars.compile(template)

    return renderer(data)
  })
}

export const writeTemplates = (
  projectPath: string,
  files: string[],
  data: string[],
): Promise<void[]> => Promise.all(
  files.map(async (file, i) => {
    const target = join(process.cwd(), projectPath, file)

    await ensureFile(target)
    await writeFile(target, data[i])
  }),
)

export default async (name: string): Promise<void> => {
  console.log('Creating store: ', __dirname)
  try {
    await ensureRoot()

    const storeTemplates = await readTemplateFiles(
      'store',
      [
        'store.ts',
        'store.test.ts',
      ],
    )
    const evaluatedTemplates = evaluateTemplates(storeTemplates, { name })

    await writeTemplates(
      'src/stores',
      [
        `${name}.ts`,
        `${name}.test.ts`,
      ],
      evaluatedTemplates,
    )
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
}
