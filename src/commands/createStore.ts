/* eslint-disable no-console */
import renderTemplates from './templateRendering/renderTemplates'

export default async (name: string): Promise<void> => {
  renderTemplates(name, 'stores')
}
