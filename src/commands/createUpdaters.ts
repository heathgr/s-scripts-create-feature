import inquirer from 'inquirer'

import { readdir } from 'fs-extra'
import { join } from 'path'
import processTemplates from '../templateCreation/processTemplates'

const createUpdaters = async (): Promise<void> => {
  const stores = await readdir(join(process.cwd(), './src/stores'))
  const storeNames = stores
    .filter((store) => !/\.test\.ts$/.test(store))
    .map((store) => store.replace(/.ts$/, ''))

  const result = await inquirer.prompt(
    [
      {
        name: 'store',
        type: 'rawlist',
        message: 'What store will you be creating an updater for?',
        choices: storeNames,
      },
      {
        name: 'names',
        type: 'input',
        message: 'Provide the names for your updaters separated by commas: ',
      },
    ],
  )

  const resultStore = result.store as string
  const updaterName = resultStore.replace(/Store$/, 'Updater')
  const resultNames = result.names as string
  const functionNames = resultNames
    .split(/[, ]/)
    .filter((x) => x !== '')

  await processTemplates(updaterName, 'updaters', { functionNames, storeName: resultStore })
}

export default createUpdaters
