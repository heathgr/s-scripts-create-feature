import inquirer from 'inquirer'
import Separator from 'inquirer/lib/objects/separator'
import Choice from 'inquirer/lib/objects/choice'

import getStoreNames from '../helpers/getStoreNames'
import getUpdaters from '../helpers/getUpdaters'
import processTemplates from '../templateCreation/processTemplates'
import { TemplateType } from '../templateCreation/types'

interface AccumulatedChoices {
  [key: string]: string[],
}

interface SelectedChoice {
  name: string,
  function: string,
}

const createComponent = async (): Promise<void> => {
  const storeNames = await getStoreNames()
  const updaterFileNames = await getUpdaters()

  // TODO extract into helper function
  const updaterChoices = updaterFileNames.reduce<(Choice|Separator)[]>((accumlated, current) => {
    const functionChoices = current.functions.map((functionName): Choice => ({
      name: functionName,
      short: functionName,
      value: {
        name: current.name,
        function: functionName,
      },
      disabled: false,
    }))

    return [
      ...accumlated,
      new inquirer.Separator(`-- ${current.name} -- `),
      ...functionChoices,
    ]
  }, [])

  const prompt = await inquirer.prompt(
    [
      {
        name: 'name',
        type: 'input',
        message: 'Enter the feature name for your component: ',
      },
      {
        name: 'stores',
        type: 'checkbox',
        message: 'What store(s) will your component subscribe to?',
        choices: storeNames,
      },
      {
        name: 'updaters',
        type: 'checkbox',
        message: 'What updater(s) will the component call?',
        choices: updaterChoices,
      },
    ],
  )

  const stores = prompt.stores.map((store: string) => store.replace(/Store/, ''))

  // TODO extract into helper function for readability
  const updaters = prompt.updaters.reduce((
    accumulator: AccumulatedChoices,
    current: SelectedChoice,
  ) => {
    const currentFeature = current.name.replace(/Updater/, '')
    const currentUpdater = accumulator[currentFeature]
    const updated = currentUpdater ? [
      ...currentUpdater,
      current.function,
    ] : [
      current.function,
    ]

    return {
      ...accumulator,
      [currentFeature]: updated,
    }
  }, {})

  await processTemplates(
    prompt.name,
    TemplateType.COMPONENT,
    {
      stores,
      updaters,
    },
  )
}

export default createComponent
