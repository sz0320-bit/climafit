import { jsx as _jsx } from "react/jsx-runtime";
// App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
jest.mock('axios');
describe('App Component', () => {
    afterEach(() => {
        // Restore the original geolocation object after each test
        // navigator.geolocation = originalGeolocation;
        jest.clearAllMocks();
    });
    it('renders screen correctly', () => {
        render(_jsx(App, {}));
        const logoElement = screen.getByText(/CLIMAFIT/i);
        expect(logoElement).toBeInTheDocument();
    });
    //   test('displays location when geolocation is available', async () => {
    //     const mockGeolocation = {
    //       getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    //         success({
    //           coords: {
    //             latitude: 51.1,
    //             longitude: 45.3,
    //           },
    //         })
    //       ),
    //     };
    //     render(<App />);
    //     await waitFor(() => {
    //       expect(screen.getByText(/Latitude: 51.1/i)).toBeInTheDocument();
    //       expect(screen.getByText(/Longitude: 45.3/i)).toBeInTheDocument();
    //     });
    //   });
    //   test('displays weather data when API call is successful', async () => {
    //     // Mock geolocation
    //     const mockGeolocation = {
    //       getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    //         success({
    //           coords: {
    //             latitude: 51.1,
    //             longitude: 45.3,
    //           },
    //         })
    //       ),
    //     };
    //     // @ts-ignore
    //     navigator.geolocation = mockGeolocation;
    //     // Mock axios response
    //     const mockWeatherData = {
    //       current: {
    //         temperature_2m: 25.5,
    //       },
    //     };
    //     (axios as jest.Mocked<typeof axios>).mockResolvedValueOnce({
    //       data: JSON.stringify(mockWeatherData),
    //     });
    //     render(<App />);
    //     await waitFor(() => {
    //       expect(
    //         screen.getByText(/Current Temperature: 25.5 F/i)
    //       ).toBeInTheDocument();
    //     });
    //   });
    //   test('displays error when API call fails', async () => {
    //     // Mock geolocation
    //     const mockGeolocation = {
    //       getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    //         success({
    //           coords: {
    //             latitude: 51.1,
    //             longitude: 45.3,
    //         },
    //       })
    //     ),
    //   };
    //   navigator.geolocation = mockGeolocation;
    //   // Mock axios error
    //   (axios as jest.Mocked<typeof axios>).mockRejectedValueOnce(new Error('Network Error'));
    //   render(<App />);
    //   await waitFor(() => {
    //     expect(screen.getByText(/Could Not Load Weather Info/i)).toBeInTheDocument();
    //   });
    // });
});
