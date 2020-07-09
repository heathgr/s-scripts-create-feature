#!/usr/bin/env node

import { join } from 'path'

import configuration from './getConfiguration'
import createProjectFiles from './createProjectFiles'
import runStep from './helpers/runStep'
import exec from './helpers/exec'
import displayHeader from './displayHeader'
import handleError from './helpers/handleError'

const run = async (): Promise<void> => {
  try {
    const projectFolder = join(process.cwd(), configuration.folder)

    await displayHeader()

    await runStep('Creating Project Files', createProjectFiles, projectFolder, configuration)
    await runStep('Installing Dependencies', async () => exec(`( cd ${projectFolder}; npm install)`))
    await runStep('Validating Project', async () => exec(`( cd ${projectFolder}; npm test)`))
    await runStep('Initializing Git', async () => exec(`( cd ${projectFolder}; git init)`))

    console.log('')
    console.log(`Your app has been successfully created in ${projectFolder}`)
    console.log('For more information and documentation visit https://github.com/heathgr/s-is-for-store-create-app/')
  } catch (e) {
    handleError(e)
  }
}

run()
