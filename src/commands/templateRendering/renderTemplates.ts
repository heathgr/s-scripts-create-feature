/* eslint-disable no-console */
import ensureRoot from './ensureRoot'
import evaluateTemplates from './evaluateTemplates'
import readTemplateFiles from './readTemplateFiles'
import writeTemplates from './writeTemplates'
import getTemplateFilePaths from './getTemplateFilePaths'
import getTargetPaths from './getTargetPaths'

const renderTemplates = async (name: string, type: string): Promise<void> => {
  try {
    await ensureRoot()

    const templateFilePaths = await getTemplateFilePaths(type)
    const templates = await readTemplateFiles(templateFilePaths)
    const renderedTemplates = evaluateTemplates(templates, { name })
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

export default renderTemplates
