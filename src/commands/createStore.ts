/* eslint-disable no-console */
import inquirer from 'inquirer'

import renderTemplates from './templateRendering/renderTemplates'

const createStore = async (): Promise<void> => {
  // TODO create a validation function
  const result = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Choose the name for your store: ',
    },
  ])

  await renderTemplates(result.name, 'stores')
}

export default createStore
