# Weather App

This **Weather App** provides real-time weather data, including the current temperature, minimum and maximum temperatures, and a five-day forecast for any city you search. The five-day forecast includes detailed temperature data every three hours. This application uses data from the OpenWeatherMap API and features an intuitive and responsive design built with Tailwind CSS and Next.js.

## Features

- **Real-Time Weather Data**: Get the current temperature along with min/max values for the selected city.
- **5-Day Forecast**: Displays a five-day weather forecast with temperature updates every three hours.
- **City Search**: Input any city name to retrieve weather data from around the world.
- **Country Flags**: Displays the country flag of the selected city using country-flag-icons.
- **Icons**: Uses modern weather icons from React Icons to represent weather conditions.

## Demo

Check out the live demo: [Weather App Demo](#) _(Add link to your live site here)_

## Technologies Used

- **Next.js**: React-based framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive design.
- **OpenWeatherMap API**: For fetching real-time weather data.
- **Country Flag Icons**: Displays country flags of searched cities.
- **React Icons**: Provides weather-related icons for a clean and modern UI.

## Installation

Follow the steps below to install and run the application locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env.local` file in the root of the project and add your OpenWeatherMap API key:
    ```bash
    NEXT_PUBLIC_API_KEY=your_openweathermap_api_key
    ```

5. Run the development server:
    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. Enter the name of a city in the search input.
2. The app will display the current weather, including min/max temperatures for the day.
3. Below that, it will display a detailed five-day forecast with temperature updates every three hours.

### Example API Usage

Ensure you're using your own API key when making the API calls. Here’s how the `fetch` request should look like in the code:

```js
const fetchWeatherData = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
  );
  const data = await res.json();
  return data;
};
