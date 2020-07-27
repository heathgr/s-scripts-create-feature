/* eslint-disable no-console */
import inquirer from 'inquirer'

import processTemplates from '../templateCreation/processTemplates'
import { TemplateType } from '../templateCreation/types'

const createStore = async (): Promise<void> => {
  // TODO create a validation function
  const result = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Enter the feature name for your store: ',
    },
  ])

  await processTemplates(result.name, TemplateType.STORE)
}

export default createStore
