import { jsx as _jsx } from "react/jsx-runtime";
import TopMenu from './TopMenu';
describe('<TopMenu />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(_jsx(TopMenu, {}));
    });
});
