import SearchComponent from './SearchComponent.vue'

describe('<SearchComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(SearchComponent)
  })
})