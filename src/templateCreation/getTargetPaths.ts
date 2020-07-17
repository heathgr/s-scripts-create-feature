import { join } from 'path'

const getTargetPaths = (
  templateFilePaths: string[],
  name: string,
  type: string,
): string[] => templateFilePaths.map((path) => {
  if (/\.test\.ts/.test(path)) {
    return join(process.cwd(), 'src', type, `${name}.test.ts`)
  }

  return join(process.cwd(), 'src', type, `${name}.ts`)
})

export default getTargetPaths
