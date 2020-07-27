import { createStore } from 's-is-for-store'

export interface {{toInterfaceName name}} {
  // add interface properties
}

export const initial{{toCapitalized name}}State: {{toInterfaceName name}} = {
  // set values for initial state
}

const {{toStoreName name}} = createStore(initial{{toCapitalized name}}State)

export default {{toStoreName name}}
