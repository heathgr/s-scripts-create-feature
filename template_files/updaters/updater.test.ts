import store, { {{toInitialStateName name}} } from '../stores/{{toStoreName name}}'
import {
  {{#each functionNames}}
  {{this}},
  {{/each}}
} from './{{toUpdaterName name}}'

describe('{{toUpdaterName name}}', () => {
  beforeEach(() => {
    store.unsubscribeAll()
    store.update({{toInitialStateName name}})
  })
{{#each functionNames}}
{{#if @index}}{{/if}}
  xit('Should update state when {{this}} is called.', () => {
    const expected = {
      // implement expected state

    }

    {{this}}()

    const actual = store.current()

    expect(actual).toEqual(expected)
  })
{{/each}}
})
