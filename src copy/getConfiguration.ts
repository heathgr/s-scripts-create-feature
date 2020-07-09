import yargs from 'yargs'

export interface Configuration {
  folder: string,
  name: string,
}

const commandLineArgs = yargs
  .usage('Usage: $0 [path]')
  .describe('n', 'Specify a project name.')
  .alias('n', 'name')
  .nargs('n', 1)
  .demandCommand(1)
  .argv

const configuration: Configuration = {
  folder: commandLineArgs._[0],
  name: commandLineArgs.n as string || commandLineArgs._[0],
}

export default configuration
