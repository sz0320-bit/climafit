describe('Dropdown Test', () => {
    it('should select "Bottom" from the dropdown', () => {
      // Visit the page where the dropdown is located
      cy.visit('http://127.0.0.1:5173/');
  
      // Click on the div acting as the dropdown toggle (Type)
      cy.get('div#\\:r9\\:') // Using the correct selector for the dropdown toggle button
        .click(); // Open the dropdown menu
  
      // Wait for the dropdown to become visible
      cy.get('ul[role="listbox"]') // Assuming the dropdown options are in a listbox, adjust if needed
        .should('be.visible'); // Assert the listbox is visible after the click
  
      // Click on the "Bottom" option from the dropdown
      cy.get('li').contains('Top').click(); 
      cy.wait(3000);
      cy.get('div#\\:r9\\:') // Make sure the dropdown is still open
      .click();

      cy.get('li').contains('Bottom').click(); // Select the 'Bottom' option, adjust the selector as needed
      cy.wait(3000);
      cy.get('div#\\:r9\\:') // Make sure the dropdown is still open
      .click();
      
      cy.get('li').contains('All').click(); 
    });
  });
  