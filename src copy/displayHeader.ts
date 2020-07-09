/* eslint-disable no-console */
import figlet from 'figlet'
import { join } from 'path'
import { readJSON } from 'fs-extra'

const generateFancyText = (message: string): Promise<string> => new Promise((resolve) => {
  figlet.text(
    message,
    {
      font: 'Big',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    },
    (err, data) => {
      resolve(data)
    },
  )
})

const displayHeader = async (): Promise<void> => {
  const packageJsonPath = join(__dirname, '../package.json')
  const packageJson = await readJSON(packageJsonPath)
  const headerText = await generateFancyText('S is for Store')

  console.log(headerText)
  console.log(`  S is for Store Create App ${packageJson.version}`)
  console.log('')
}

export default displayHeader
