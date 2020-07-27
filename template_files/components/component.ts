import React, { FC } from 'react'
import { useStore } from '@s-is-for-store/react'

{{#each stores}}
import {{toStoreName this}} from '../stores/{{toStoreName this}}'
{{/each}}
{{#each updaters}}
import {
  {{#each this}}
  {{this}},
  {{/each}}
} from '../updaters/{{toUpdaterName @key}}'
{{/each}}

const {{toCapitalized name}}: FC = () => {
  {{#each stores}}
  const {{toStateName this}} = useStore({{toStoreName this}})
  {{/each}}

  return (
    <div>
    </div>
  )
}

export default {{toCapitalized name}}
