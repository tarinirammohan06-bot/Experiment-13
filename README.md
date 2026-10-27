# Weather Forecast App 🌦️

## 📌 Project Overview

The **Weather Forecast App** is a React.js web application that fetches and displays real-time weather information for a user-specified city using the OpenWeatherMap API. It provides essential weather details, including temperature, humidity, atmospheric pressure, wind speed, and weather conditions.

The application also uses Chart.js to display a graphical representation of temperature forecasts, helping users understand upcoming weather trends.

This project was developed as part of **Experiment 13** of the Skill Development Course (Node.js / React.js / Django).

## ✨ Features

- 🌍 **City-Based Weather Search:** Search for weather information by entering a city name.
- 🌡️ **Temperature Details:** Displays the current temperature in Celsius.
- 💧 **Humidity Information:** Shows the current humidity percentage.
- 🌤️ **Weather Conditions:** Displays a description of the current weather.
- 🌬️ **Wind Speed:** Provides wind speed information.
- 📊 **Temperature Forecast Chart:** Visualizes forecast temperatures using Chart.js.
- 🔄 **API Integration:** Fetches weather data dynamically from OpenWeatherMap.
- 🔐 **Environment Variables:** Uses an environment variable to configure the API key.

## 🛠️ Technologies Used

- **React.js** – Frontend user interface.
- **JavaScript (ES6+)** – Application logic.
- **HTML5** – Webpage structure.
- **CSS3** – Styling, if configured.
- **Axios** – HTTP requests to the weather API.
- **OpenWeatherMap API** – Weather and forecast data.
- **Chart.js** – Temperature graph visualization.
- **react-chartjs-2** – React integration for Chart.js.
- **Node.js and npm** – Development environment and package management.

## 📂 Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── App.js
│   ├── Weather.js
│   ├── WeatherChart.js
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- A code editor such as Visual Studio Code
- An OpenWeatherMap API key

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate to the Project Folder

```bash
cd weather-app
```

### Step 3: Install Dependencies

```bash
npm install
npm install axios chart.js react-chartjs-2
```

### Step 4: Configure the API Key

Create a `.env` file in the project root directory, alongside `package.json`, and add:

```env
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual OpenWeatherMap API key.

**Important:** Never upload your actual `.env` file or expose your API key in a public repository. Keep `.env` listed in `.gitignore`.

### Step 5: Start the Application

```bash
npm start
```

### Step 6: Open the Application

Visit the following address in your browser:

http://localhost:3000

Enter a city name and click **Get Weather** to view its weather information.

## 📊 Weather Forecast Visualization

The application uses Chart.js to create a line graph showing forecast temperatures over time.

The chart uses OpenWeatherMap's free 5-day forecast endpoint, which provides forecasts at 3-hour intervals. This is forecast data, not historical weather data.

## 🔍 How It Works

1. The user enters a city name.
2. The React application sends an HTTP request using Axios.
3. OpenWeatherMap returns weather data in JSON format.
4. The Weather component displays the current weather details.
5. The WeatherChart component fetches forecast data and renders a temperature line chart using Chart.js.

## 🚀 Future Enhancements

- Add weather icons and dynamic backgrounds.
- Display weather forecasts for multiple days.
- Add loading indicators and user-friendly error messages.
- Improve responsive design for mobile and desktop devices.
- Display additional weather information, such as sunrise, sunset, and visibility.
- Add historical weather charts using an API plan that supports historical data.

## 📚 Learning Outcomes

- Developing React functional components.
- Managing state and lifecycle behavior using React hooks.
- Fetching API data using Axios.
- Working with environment variables.
- Integrating third-party APIs into a React application.
- Visualizing forecast data using Chart.js.

## 📝 Conclusion

The Weather Forecast App demonstrates how React.js can be integrated with an external weather API to retrieve and display real-time weather information. By incorporating Axios and Chart.js, the project provides practical experience in API integration, state management, and graphical data visualization.

---

**Project Name:** Weather Forecast App  
**Experiment:** 13  
**Domain:** Web Development  
**Frontend:** React.js  
**API Provider:** OpenWeatherMap  
**Data Visualization:** Chart.js
