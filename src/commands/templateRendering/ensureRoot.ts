import { pathExists } from 'fs-extra'
import { join } from 'path'

const ensureRoot = async (): Promise<void> => {
  const cwd = process.cwd()
  const packageJsonExists = await pathExists(join(cwd, 'package.json'))
  const srcExists = await pathExists(join(cwd, '/src'))

  if (!packageJsonExists || !srcExists) {
    throw new Error('s-scripts must be run in the project root.')
  }
}

export default ensureRoot
