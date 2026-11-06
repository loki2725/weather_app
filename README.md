# ⛅ Weather App

A sleek, modern weather application built with **React 19** and **Tailwind CSS 4**. Search for any city worldwide and get real-time weather data including temperature, conditions, and "feels like" temperature — all wrapped in a beautiful glassmorphism UI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

## ✨ Features

- 🔍 **City Search** — Look up current weather for any city in the world
- 🌡️ **Live Temperature** — Displays temperature in Celsius
- 🌤️ **Weather Conditions** — Shows the current weather condition (sunny, cloudy, rainy, etc.)
- 🤔 **Feels Like** — "Feels like" temperature for a more accurate sense of the weather
- 🎨 **Glassmorphism UI** — Modern frosted-glass design with gradient backgrounds
- 📱 **Responsive** — Fully responsive layout that works on mobile, tablet, and desktop

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI library |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [Vite 7](https://vite.dev/) | Build tool & dev server |
| [WeatherAPI](https://www.weatherapi.com/) | Real-time weather data |

## 📂 Project Structure

```
weather_app/
├── index.html            # HTML entry point
├── package.json          # Dependencies & scripts
├── vite.config.js        # Vite configuration (React + Tailwind plugins)
├── eslint.config.js      # ESLint configuration
├── public/
│   └── vite.svg          # Favicon
└── src/
    ├── main.jsx          # React root mount
    ├── App.jsx           # Main application component (UI & search logic)
    ├── api.js            # Custom hook for fetching weather data
    ├── App.css           # Additional styles (currently empty)
    ├── index.css         # Global styles
    └── assets/
        └── react.svg     # React logo asset
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd weather_app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` directory. You can preview it locally with:

```bash
npm run preview
```

## 🔑 API

This app uses the [WeatherAPI](https://www.weatherapi.com/) to fetch real-time weather data. The API key is configured in [`src/api.js`](src/api.js).

To use your own API key:

1. Sign up at [weatherapi.com](https://www.weatherapi.com/) for a free API key.
2. Replace the `apiKey` value in `src/api.js` with your own key.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

## 📄 License

This project is open source and available for personal and educational use.
