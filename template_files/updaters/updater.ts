import store from '../store/{{storeName}}'
{{#each functionNames}}
{{#if @index}}{{/if}}
export const {{this}} = (value: /* define value type */): void => {
  store.update({
    // implement update
  })
}
{{/each}}