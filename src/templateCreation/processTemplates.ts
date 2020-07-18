/* eslint-disable no-console */
import ensureRoot from './ensureRoot'
import renderTemplates from './renderTemplates'
import readTemplateFiles from './readTemplateFiles'
import writeTemplates from './writeTemplates'
import getTemplateFilePaths from './getTemplateFilePaths'
import getTargetPaths from './getTargetPaths'

// TODO create enum for types
const processTemplates = async (name: string, type: string, data = {}): Promise<void> => {
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
    console.log(e.message)
    process.exit(1)
  }
}

export default processTemplates
