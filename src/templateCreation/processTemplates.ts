/* eslint-disable no-console */
import ensureRoot from './ensureRoot'
import renderTemplates from './renderTemplates'
import readTemplateFiles from './readTemplateFiles'
import writeTemplates from './writeTemplates'
import getTemplateFilePaths from './getTemplateFilePaths'
import getTargetPaths from './getTargetPaths'
import { TemplateType } from './types'

// TODO create enum for types
const processTemplates = async (name: string, type: TemplateType, data = {}): Promise<void> => {
  try {
    await ensureRoot()

    const templateFilePaths = await getTemplateFilePaths(type)
    const templates = await readTemplateFiles(templateFilePaths)
    const renderedTemplates = renderTemplates(
      templates,
      {
        name,
        ...data,
      },
    )
    const targetPaths = getTargetPaths(templateFilePaths, name, type)

    await writeTemplates(
      targetPaths,
      renderedTemplates,
    )
  } catch (e) {
    // TODO better error output
    console.log('oh no something broke!!!')
    console.log(e.message)
    console.log('--------')
    console.log(e)
    process.exit(1)
  }
}

export default processTemplates
