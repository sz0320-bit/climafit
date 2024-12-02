import { jsx as _jsx } from "react/jsx-runtime";
import ClothingItemDisplay from './ClothingItems';
describe('<ClothingItemDisplay />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(_jsx(ClothingItemDisplay, {}));
    });
});
