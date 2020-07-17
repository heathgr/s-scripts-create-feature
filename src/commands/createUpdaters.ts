import inquirer from 'inquirer'

import { readdir } from 'fs-extra'
import { join } from 'path'
import renderTemplates from '../templateCreation/renderTemplates'

const createUpdaters = async (): Promise<void> => {
  const stores = await readdir(join(process.cwd(), './src/stores'))
  const storeNames = stores
    .filter((store) => !/\.test\.ts$/.test(store))
    .map((store) => store.replace(/.ts$/, ''))

  console.log('store names: ', storeNames)

  const result = await inquirer.prompt(
    [
      {
        name: 'store',
        type: 'rawlist',
        message: 'What store will you be creating an updater for?',
        choices: storeNames,
      },
    ],
  )

  const resultName = result.store as string
  const updaterName = resultName.replace(/Store$/, 'Updater')

  await renderTemplates(updaterName, 'updaters')
}

export default createUpdaters
