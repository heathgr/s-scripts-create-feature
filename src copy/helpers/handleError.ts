/* eslint-disable no-console */
interface ExtendedError extends Error {
  stdout?: string,
  stderr?: string,
}

const handleError = (e: ExtendedError): void => {
  if (e.message) {
    console.error(e.message)
  }
  if (e.stack) {
    console.error(e.stack)
  }
  if (e.stdout) {
    console.error(e.stdout)
  }
  if (e.stdout) {
    console.error(e.stderr)
  }

  process.exit(1)
}

export default handleError
