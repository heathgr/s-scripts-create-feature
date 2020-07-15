import handlebars from 'handlebars'

export interface TemplateData {
  [key: string]: string,
}

const evaluateTemplates = (templates: string[], data: TemplateData): string[] => {
  handlebars.registerHelper('toInterfaceName', (str: string) => `${str[0].toUpperCase()}${str.substring(1)}State`)

  return templates.map((template) => {
    const renderer = handlebars.compile(template)

    return renderer(data)
  })
}

export default evaluateTemplates
