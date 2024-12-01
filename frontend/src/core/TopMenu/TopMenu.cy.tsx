import React from 'react'
import TopMenu from './TopMenu'

describe('<TopMenu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TopMenu />)
  })
})