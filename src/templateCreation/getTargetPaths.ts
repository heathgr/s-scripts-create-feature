import { join } from 'path'
import { TemplateType } from './types'

const getFileName = (
  name: string,
  type: TemplateType,
  isTest: boolean,
): string => {
  const extesnsion = type === TemplateType.COMPONENT ? '.tsx' : '.ts'
  const test = isTest ? '.test' : ''

  switch (type) {
    case TemplateType.COMPONENT: {
      return `${name[0].toUpperCase() + name.substring(1)}${test}${extesnsion}`
    }
    case TemplateType.STORE: {
      return `${name}Store${test}${extesnsion}`
    }
    case TemplateType.UPDATER: {
      return `${name}Updater${test}${extesnsion}`
    }
    default: {
      return name
    }
  }
}

const getTargetPaths = (
  templateFilePaths: string[],
  name: string,
  type: TemplateType,
): string[] => templateFilePaths.map((path) => {
  const isTest = /\.test\.ts/.test(path)
  const fileName = getFileName(name, type, isTest)

  return join(process.cwd(), 'src', type, `${fileName}`)
})

export default getTargetPaths
