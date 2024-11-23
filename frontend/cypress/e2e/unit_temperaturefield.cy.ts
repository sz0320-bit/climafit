describe('Temperature input field test', () => {
    it('should change the temperature value correctly', () => {
      // Visit the app or page
      cy.wait(5000);
      cy.visit('http://127.0.0.1:5173/');
  
      // Get the input field using its ID or class
      cy.get('input#\\:r3\\:')

        .focus() // Optional: clear the current value
        .type('{backspace}{backspace}{backspace}')
        .type('72', {delay: 100})  // Type the new temperature value (e.g., 72)
        .should('have.value', '072');  // Verify the value in the input field is correct
  
      // Optionally, verify any updates related to the temperature (like UI elements or labels)
      cy.get('label[for="\\:r3\\:"]').should('have.text', 'Temperature (°F)'); // Verify the temperature label
    });
  });
  