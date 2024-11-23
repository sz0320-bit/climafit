describe('Color Preference Dropdown Test', () => {
    it('should select "Black" from the color preference dropdown', () => {
      // Visit the page where the dropdown is located
      cy.visit('http://127.0.0.1:5173/');  // Replace with your actual page URL
  
      // Click on the dropdown toggle button to open the dropdown
      cy.get('div#demo-multiple-name') // Target the div with the specific ID for the dropdown
        .click(); // Open the dropdown menu
  
      // Wait for the dropdown options to become visible
      cy.get('div[role="combobox"]') // Assuming the options are inside a listbox (ul)
        .should('be.visible'); // Ensure the listbox is visible after opening
  
      // Click on the "Black" option from the dropdown
      cy.get('li').contains('Black').click(); // Select the 'Black' option by its text content
      cy.get('li').contains('Blue').click();
      //cy.get('div[role="combobox"]').click();
    });
  });
  