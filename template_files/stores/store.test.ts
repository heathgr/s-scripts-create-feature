import { Store } from 's-is-for-store'
import store, { {{toInitialStateName name}} } from './{{ toStoreName name }}'

describe('{{ name }}', () => {
  it('Should create a store.', () => {
    expect(store).toBeInstanceOf(Store)
  })

  it('Should have the correct initial state.', () => {
    expect(store.current()).toEqual({{toInitialStateName name}})
  })
})
