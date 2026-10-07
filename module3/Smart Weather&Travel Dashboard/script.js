// Sample weather data

const weatherData = {
    chennai: {
        temperature: 32,
        condition: "Sunny",
        humidity: "65%",
        wind: "14 km/h",
        feels: "35°C",
        icon: "☀️"
    },

    hyderabad: {
        temperature: 29,
        condition: "Partly Cloudy",
        humidity: "58%",
        wind: "11 km/h",
        feels: "31°C",
        icon: "⛅"
    },

    bangalore: {
        temperature: 25,
        condition: "Cloudy",
        humidity: "70%",
        wind: "10 km/h",
        feels: "26°C",
        icon: "☁️"
    },

    mumbai: {
        temperature: 30,
        condition: "Rainy",
        humidity: "78%",
        wind: "18 km/h",
        feels: "33°C",
        icon: "🌧️"
    },

    delhi: {
        temperature: 28,
        condition: "Clear",
        humidity: "45%",
        wind: "12 km/h",
        feels: "29°C",
        icon: "🌤️"
    }
};


// Search Weather

function searchWeather() {

    const cityInput =
        document.getElementById("cityInput").value
        .trim()
        .toLowerCase();

    if (cityInput === "") {
        alert("Please enter a city name.");
        return;
    }

    const data = weatherData[cityInput];

    if (!data) {
        alert(
            "Weather data not available. Try Chennai, Hyderabad, Bangalore, Mumbai or Delhi."
        );
        return;
    }

    document.getElementById("cityName").textContent =
        cityInput.charAt(0).toUpperCase() + cityInput.slice(1);

    document.getElementById("temperature").textContent =
        data.temperature;

    document.getElementById("condition").textContent =
        data.condition;

    document.getElementById("humidity").textContent =
        data.humidity;

    document.getElementById("wind").textContent =
        data.wind;

    document.getElementById("feels").textContent =
        data.feels;

    document.getElementById("weatherIcon").textContent =
        data.icon;
}


// Select Destination

function selectDestination(place) {

    document.getElementById("destination").value = place;

    document.getElementById("planner").scrollIntoView({
        behavior: "smooth"
    });
}


// Create Travel Plan

function createPlan() {

    const destination =
        document.getElementById("destination").value.trim();

    const date =
        document.getElementById("travelDate").value;

    const travelers =
        document.getElementById("travelers").value;

    const result =
        document.getElementById("planResult");

    if (destination === "" || date === "") {
        result.innerHTML =
            "⚠️ Please enter a destination and travel date.";
        return;
    }

    result.innerHTML = `
        <h3>🎉 Travel Plan Created!</h3>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Travelers:</strong> ${travelers}</p>
        <p>Have a safe and enjoyable journey! ✈️</p>
    `;
}


// Enter key for weather search

document.getElementById("cityInput").addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {
            searchWeather();
        }

    }
);