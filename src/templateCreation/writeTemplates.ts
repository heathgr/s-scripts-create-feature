import { ensureFile, writeFile } from 'fs-extra'

const writeTemplates = (
  targetPaths: string[],
  data: string[],
): Promise<void[]> => Promise.all(
  targetPaths.map(async (path, i) => {
    await ensureFile(path)
    await writeFile(path, data[i])
  }),
)

export default writeTemplates
