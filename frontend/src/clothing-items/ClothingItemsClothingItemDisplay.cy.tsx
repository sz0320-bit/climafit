import React from 'react'
import ClothingItemDisplay from './ClothingItems'

describe('<ClothingItemDisplay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ClothingItemDisplay />)
  })
})