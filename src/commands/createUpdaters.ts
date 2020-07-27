import inquirer from 'inquirer'

import processTemplates from '../templateCreation/processTemplates'
import getStoreNames from '../helpers/getStoreNames'
import { TemplateType } from '../templateCreation/types'

const createUpdaters = async (): Promise<void> => {
  const storeNames = await getStoreNames()

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

  const storeName = result.store as string
  const featureName = storeName.replace(/Store/, '')
  const resultNames = result.names as string
  const functionNames = resultNames
    .split(/[, ]/)
    .filter((x) => x !== '')

  await processTemplates(
    featureName,
    TemplateType.UPDATER,
    { functionNames },
  )
}

export default createUpdaters
