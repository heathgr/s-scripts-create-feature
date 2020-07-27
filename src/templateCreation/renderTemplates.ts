import handlebars from 'handlebars'

export interface TemplateData {
  [key: string]: string,
}

const toCaptialized = (str: string) => {
  if (!str) {
    return ''
  }

  return str[0].toUpperCase() + str.substring(1)
}

const renderTemplates = (templates: string[], data: TemplateData): string[] => {
  handlebars.registerHelper('toInterfaceName', (str: string) => `${toCaptialized(str)}State`)
  handlebars.registerHelper('toStoreName', (str: string) => `${str}Store`)
  handlebars.registerHelper('toStateName', (str: string) => `${str}State`)
  handlebars.registerHelper('toUpdaterName', (str: string) => `${str}Updater`)
  handlebars.registerHelper('toInitialStateName', (str: string) => `initial${toCaptialized(str)}State`)
  handlebars.registerHelper('toCapitalized', (str: string) => toCaptialized(str))

  return templates.map((template) => {
    const renderer = handlebars.compile(template)

    return renderer(data)
  })
}

export default renderTemplates
