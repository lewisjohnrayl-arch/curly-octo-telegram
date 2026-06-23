# Weather Dashboard

A responsive weather dashboard application that fetches real-time weather data from a public weather API.

## Features

- 🌤️ **Current Weather Display**: Shows temperature, weather condition, humidity, wind speed, pressure, and visibility
- 📅 **5-Day Forecast**: Displays weather predictions for the next 5 days
- 🔍 **City Search**: Search for any city in the world
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Real-time Data**: Fetches live weather data from WeatherAPI
- 🎨 **Beautiful UI**: Modern gradient background with smooth animations

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Async/await, fetch API
- **WeatherAPI**: Free weather API service
- **Font Awesome**: Weather icons

## How to Use

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Search for a city** by typing its name in the search box and pressing Enter or clicking the search button
4. **View current weather** and the **5-day forecast**

## API Configuration

The dashboard uses the free WeatherAPI service:
- **API Base URL**: `https://api.weatherapi.com/v1`
- **Free Tier**: 1 million calls/month
- **Documentation**: [WeatherAPI Docs](https://www.weatherapi.com/docs/)

### Getting Your Own API Key

1. Visit [weatherapi.com](https://www.weatherapi.com/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Replace the API_KEY in `script.js` with your own key

```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

## Project Structure

```
weather-dashboard/
├── index.html      # HTML structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Features Explained

### Current Weather Section
- City name and country
- Current date and time
- Temperature with weather icon
- Weather description
- Four key metrics:
  - Humidity percentage
  - Wind speed (km/h)
  - Atmospheric pressure (mb)
  - Visibility (km)

### Forecast Section
- 5-day weather forecast
- High and low temperatures
- Weather condition icons
- Responsive grid layout

### Error Handling
- User-friendly error messages
- Validation for empty search
- Graceful handling of API errors

## Responsive Breakpoints

- **Desktop**: Full layout with 2-column weather details
- **Tablet** (max-width: 768px): Optimized card layouts
- **Mobile** (max-width: 480px): Single-column layout

## Future Enhancements

- [ ] Geolocation-based weather
- [ ] Weather alerts and warnings
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Dark mode theme
- [ ] Recent searches history
- [ ] Hourly forecast
- [ ] Air quality index (AQI)
- [ ] Multiple city comparison

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Icons by [Font Awesome](https://fontawesome.com/)

## Troubleshooting

### "City not found" error
- Check spelling of the city name
- Try a more specific location (e.g., "London, UK")
- Try a major city in your country

### No data displayed
- Check your internet connection
- Verify the API key is correct (if using your own)
- Check browser console for error messages (F12 or right-click → Inspect)

### API rate limit exceeded
- Wait a few minutes before making more requests
- Consider upgrading to a paid plan for higher limits

## Support

For issues with the WeatherAPI service, visit their [documentation](https://www.weatherapi.com/docs/).

For issues with this project, check the code comments or review the feature list above.

---

**Enjoy your weather dashboard! 🌈**
