// Configuration
const API_KEY = 'bfe03c8c191e41c98a121820242606'; // Free API from weatherapi.com
const BASE_URL = 'https://api.weatherapi.com/v1';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const currentWeatherSection = document.getElementById('currentWeather');
const forecastSection = document.getElementById('forecastSection');
const errorMessage = document.getElementById('errorMessage');
const loadingSpinner = document.getElementById('loadingSpinner');
const initialState = document.getElementById('initialState');
const forecastContainer = document.getElementById('forecastContainer');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Main search handler
async function handleSearch() {
    const city = searchInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    await fetchWeather(city);
}

// Fetch weather data
async function fetchWeather(city) {
    try {
        showLoading(true);
        hideError();

        // Fetch current weather and forecast
        const currentResponse = await fetch(
            `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );
        
        const forecastResponse = await fetch(
            `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no`
        );

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error('City not found. Please try again.');
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecast(forecastData);
        hideInitialState();

    } catch (error) {
        console.error('Error fetching weather:', error);
        showError(error.message || 'Failed to fetch weather data. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Display current weather
function displayCurrentWeather(data) {
    const { location, current } = data;

    // Update city and date info
    document.getElementById('cityName').textContent = 
        `${location.name}, ${location.country}`;
    document.getElementById('weatherDate').textContent = 
        new Date(location.localtime).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

    // Update temperature and icon
    document.getElementById('temperature').textContent = 
        `${Math.round(current.temp_c)}°C`;
    document.getElementById('weatherIcon').src = `https:${current.condition.icon}`;
    document.getElementById('weatherIcon').alt = current.condition.text;
    document.getElementById('weatherDescription').textContent = 
        current.condition.text;

    // Update weather details
    document.getElementById('humidity').textContent = `${current.humidity}%`;
    document.getElementById('windSpeed').textContent = 
        `${current.wind_kph.toFixed(1)} km/h`;
    document.getElementById('pressure').textContent = 
        `${current.pressure_mb.toFixed(0)} mb`;
    document.getElementById('visibility').textContent = 
        `${current.vis_km.toFixed(1)} km`;

    // Show current weather section
    currentWeatherSection.classList.remove('hidden');
}

// Display forecast
function displayForecast(data) {
    const { forecast } = data;
    forecastContainer.innerHTML = '';

    // Show every other day (5 days from now)
    forecast.forecastday.slice(0, 5).forEach((day) => {
        const forecastCard = createForecastCard(day);
        forecastContainer.appendChild(forecastCard);
    });

    // Show forecast section
    forecastSection.classList.remove('hidden');
}

// Create forecast card
function createForecastCard(day) {
    const card = document.createElement('div');
    card.className = 'forecast-card';

    const date = new Date(day.date);
    const dateStr = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
    });

    const maxTemp = Math.round(day.day.maxtemp_c);
    const minTemp = Math.round(day.day.mintemp_c);
    const condition = day.day.condition.text;
    const icon = `https:${day.day.condition.icon}`;

    card.innerHTML = `
        <div class="date">${dateStr}</div>
        <img src="${icon}" alt="${condition}">
        <div class="temp">${maxTemp}°C / ${minTemp}°C</div>
        <div class="description">${condition}</div>
    `;

    return card;
}

// Show loading spinner
function showLoading(show) {
    if (show) {
        loadingSpinner.classList.remove('hidden');
        currentWeatherSection.classList.add('hidden');
        forecastSection.classList.add('hidden');
        initialState.classList.add('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    currentWeatherSection.classList.add('hidden');
    forecastSection.classList.add('hidden');
    initialState.classList.remove('hidden');
}

// Hide error message
function hideError() {
    errorMessage.classList.add('hidden');
}

// Hide initial state
function hideInitialState() {
    initialState.classList.add('hidden');
}

// Initialize with default city (optional)
window.addEventListener('load', () => {
    // Uncomment the line below to load a default city on page load
    // fetchWeather('London');
});
