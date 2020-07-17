/* eslint-disable no-console */
import inquirer from 'inquirer'

import renderTemplates from '../templateCreation/renderTemplates'

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

  await renderTemplates(storeName, 'stores')
}

export default createStore
