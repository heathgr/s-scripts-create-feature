/* eslint-disable @typescript-eslint/no-unused-expressions */
import yargs from 'yargs'
import createStore from './commands/createStore'

export default yargs.command(
  'store',
  'Create a new store.',
  (args) => args.demandCommand(1),
  (argsv) => {
    const storeName = argsv._[1]

    createStore(storeName)
  },
)
  .demandCommand(1)
  .argv
