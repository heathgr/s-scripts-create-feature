import {{toStoreName name}} from '../stores/{{toStoreName name}}'
{{#each functionNames}}
{{#if @index}}{{/if}}
export const {{this}} = (): void => {
  {{toStoreName ../name}}.update({
    // implement update
  })
}
{{/each}}