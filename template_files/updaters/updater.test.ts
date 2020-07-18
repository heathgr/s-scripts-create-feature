import store, { initialState } from '../store/{{storeName}}'
import { {{#each functionNames}}{{#if @index}}, {{/if}}{{this}}{{/each}} } from './{{name}}'

describe('{{name}}', () => {
  beforeEach(() => {
    store.unsubscribeAll()
    store.update(initialState)
  })
  {{#each functionNames}}
  {{#if @index}}{{/if}}
  xit('Should update state when {{this}} is called.', () => {
    const expected = {
      // implement expected state

    }

    {{this}}(/* call with test value */)

    const actual = store.current()

    expect(actual).toEqual(expected)
  })
  {{/each}}
})
