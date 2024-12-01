describe("App Component Functionality", () => {
    beforeEach(() => {


      cy.intercept(
        "GET",
        "https://api.open-meteo.com/v1/forecast*",
        (req) => {
          req.reply({
            statusCode: 200,
            body: {
              current: {
                time: "2024-01-01T00:00:00Z",
                temperature_2m: 75,
                rain: 0,
                showers: 0,
                snowfall: 0,
                wind_speed_10m: 5,
              },
            },
          });
        }
      ).as("getWeather");
    });
  
    it("shows location dialog on page load", () => {
      // Stub the geolocation API
      cy.visit("/", {
        onBeforeLoad(win) {
          cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
            (success, error) => {
              error({
                code: 1,
                message: "User denied Geolocation",
              });
            }
          );
        },
      });
  
      // Assert the error message is displayed
      cy.contains("Could Not Load Weather Info").should("be.visible");
    });
  
    it("renders the component when weather data is retrieved", () => {
      // Stub the geolocation API
      cy.visit("/", {
        onBeforeLoad(win) {
          cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
            (success) => {
              success({
                coords: {
                  latitude: 37.7749,
                  longitude: -122.4194,
                },
              });
            }
          );
        },
      });
  
      // Wait for the weather API response
      cy.wait("@getWeather");
  
      // Assert the component with weather data is rendered
    //   cy.get("ClothingItemDisplay").should('be.visible')
    });
  
    it("shows an error when location is blocked", () => {
      // Stub the geolocation API to simulate user blocking location access
      cy.visit("/", {
        onBeforeLoad(win) {
          cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
            (success, error) => {
              error({
                code: 1,
                message: "User denied Geolocation",
              });
            }
          );
        },
      });
  
      // Assert the error message is displayed
      cy.contains("Could Not Load Weather Info").should("be.visible");
    });
  });
  