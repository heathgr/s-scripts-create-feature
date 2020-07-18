/* eslint-disable no-console */
import inquirer from 'inquirer'

import processTemplates from '../templateCreation/processTemplates'

const createStore = async (): Promise<void> => {
  // TODO create a validation function
  const result = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Enter the feature name for your store: ',
    },
  ])

  const featureName = result.name as string
  const storeName = `${featureName}Store`

  await processTemplates(storeName, 'stores')
}

export default createStore
