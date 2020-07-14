import { createStore } from 's-is-for-store'

export interface {{ toInterfaceName name }} {
  // add interface properties
}

export const initialState: {{ toInterfaceName name }} = {
  // set values for initial state
}

const {{ name }} = createStore(initialState)

export default {{ name }}
