import type { Playground } from "../types/playgroundTypes";

export const PLAYGROUNDS = [
    
    {
        id: "weather-app",
        title: "Weather App",
        description: "A simple weather application that fetches data from a public API and displays current weather information.",
        img: `${import.meta.env.BASE_URL}playground/weather-app.png`,
        live: "https://sashagutman.github.io/weather-app/",
        code: "https://github.com/sashagutman/weather-app"
    },

    {
        id: "tic-tac-toe",
        title: "Tic Tac Toe",
        description: "A classic Tic Tac Toe game built with React, allowing two players to compete against each other.",
        img: `${import.meta.env.BASE_URL}playground/tic-tac-toe.jpg`,
        live: "https://sashagutman.github.io/tic-tac-toe/",
        code: "https://github.com/sashagutman/tic-tac-toe"
    },

    {
        id: "currency-converter",
        title: "Currency Converter",
        description: "An interactive tool for converting between multiple currencies using up-to-date exchange rates and a clean, responsive UI.",
        img: `${import.meta.env.BASE_URL}playground/currencies.jpg`,
        live: "https://sashagutman.github.io/currency-converter/",
        code: "https://github.com/sashagutman/currency-converter"
    },

    {
        id: "memory-game",
        title: "Memory Game",
        description: "An interactive memory card game where players flip cards to find matching pairs.",
        img: `${import.meta.env.BASE_URL}playground/memory-game.png`,
        live: "https://sashagutman.github.io/Memory-Game/",
        code: "https://github.com/sashagutman/Memory-Game"
    },

    {
        id: "countries",
        title: "Countries Info",
        description: "An application that displays information about countries using data from a public API.",
        img: `${import.meta.env.BASE_URL}playground/countries.png`,
        live: "https://sashagutman.github.io/country-explorer/",
        code: "https://github.com/sashagutman/country-explorer"
    },

    {   id: "math-game",
        title: "Math Game",
        description: "Fun math game: pick an operator, solve fast, track score & accuracy.",
        img: `${import.meta.env.BASE_URL}playground/math-quiz.jpg`,
        live: "https://sashagutman.github.io/math-game/",
        code: "https://github.com/sashagutman/math-game"
    }

] satisfies Playground[];