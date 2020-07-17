import inquirer from 'inquirer'

import createStore from './createStore'
import createUpdaters from './createUpdaters'

enum StartChoices {
  CREATE_STORE = 'Create Store',
  CREATE_UPDATER = 'Create Updater',
  CREATE_COMPONENT = 'Create Component',
  EXIT = 'Exit',
}

const start = async (): Promise<void> => {
  const result = await inquirer.prompt([
    {
      name: 'action',
      type: 'rawlist',
      message: 'Choose an action to perform: ',
      choices: [
        StartChoices.CREATE_STORE,
        StartChoices.CREATE_UPDATER,
        StartChoices.CREATE_COMPONENT,
        StartChoices.EXIT,
      ],
    },
  ])

  switch (result.action) {
    case StartChoices.CREATE_STORE: {
      createStore()
      return
    }
    case StartChoices.CREATE_UPDATER: {
      createUpdaters()
      return
    }
    default: {
      process.exit(0)
    }
  }
}

export default start
