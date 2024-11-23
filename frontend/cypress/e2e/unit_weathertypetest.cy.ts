describe('Dropdown Test', () => {
    it('should open the dropdown when clicked', () => {
      // Visit the page where the button is located
      cy.visit('http://127.0.0.1:5173/');
  
      // Click on the div acting as the dropdown toggle
      cy.get('div#\\:r5\\:') // You can adjust the selector based on the actual ID or use a different selector
        .click(); // Click the div to open the dropdown
  
      // Assert that the dropdown options are visible (check for the dropdown list or icon state)
      cy.get('div[role="combobox"]') // Assuming the dropdown list has a 'listbox' role
        .should('be.visible'); // Assert the listbox is visible after the click
  
      // Optionally, you can interact with the options inside the dropdown
      cy.get('li').contains('Warm').click(); // Example of selecting an option, adjust based on actual HTML
    });
  });
  