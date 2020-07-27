import { mount } from 'enzyme'
import React from 'react'
import { createTestUpdater } from '@s-is-for-store/react/lib/test-utils'

import {{toCapitalized name}} from './{{toCapitalized name}}'
{{#each updaters}}
import {
  {{#each this}}
  {{this}},
  {{/each}}
} from '../updaters/{{toUpdaterName @key}}'
{{/each}}
{{#each stores}}
import {{toStoreName this}}, { {{toInitialStateName this}} } from '../stores/{{toStoreName this}}'
{{/each}}

describe('{{toCapitalized name}}', () => {
  {{#each updaters}}
  const {{toUpdaterName @key}} = createTestUpdater({{toStoreName @key}})
  {{/each}}

  beforeEach(() => {
    {{#each stores}}
    {{toStoreName this}}.unsubscribeAll()
    {{/each}}
    {{#each stores}}
    {{toStoreName this}}.update({{toInitialStateName this}})
    {{/each}}
  })

  it('Should render', () => {
    const subject = mount(<{{toCapitalized name}} />)

    expect(subject.exists()).toBe(true)
  })
})
