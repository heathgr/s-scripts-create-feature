import { readdir, readFile } from 'fs-extra'

import { join } from 'path'

interface Updater {
  name: string,
  functions: string[],
}

// TODO see if we can use a common funtion for getting the name of all resources
const getUpdaterNames = async (): Promise<string[]> => {
  const stores = await readdir(join(process.cwd(), './src/updaters'))

  return stores
    .filter((store) => !/\.test\.ts$/.test(store))
    .map((store) => store.replace(/.ts$/, ''))
}

const getUpdaterFunctions = async (updaterName: string): Promise<string[]> => {
  const updaterFile = await readFile(
    join(process.cwd(), './src/updaters', `${updaterName}.ts`),
    'utf8',
  )
  const functionNames = updaterFile
    .match(/export const (.*) = \(.*\)/g)
    ?.map((match) => match.split(' ')[2])

  return functionNames || []
}

const getUpdaters = async (): Promise<Updater[]> => {
  const updaterNames = await getUpdaterNames()

  return Promise.all(updaterNames.map(
    async (updaterName) => {
      const functions = await getUpdaterFunctions(updaterName)

      return {
        name: updaterName,
        functions,
      }
    },
  ))
}

export default getUpdaters
