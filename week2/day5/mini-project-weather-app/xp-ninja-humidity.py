# Mini project : XP Ninja

# For creating bar charts
import matplotlib.pyplot as plt  

from pyowm import OWM  # For weather data
from datetime import datetime, timedelta  # For date handling

API_KEY = "1b989af6596808e82feb16697ea39bd0"  # Replace with your OpenWeatherMap API key
owm = OWM(API_KEY)
mgr = owm.weather_manager()  # Weather manager to access weather data

def init_plot():
    # Initialize the bar chart layout
    plt.figure(figsize=(8, 5))
    plt.title("3-Day Humidity Forecast")
    plt.ylabel("Humidity (%)")
    plt.xlabel("Date")

def write_humidity_on_bar_chart(values):
    # Add humidity values on top of each bar
    for i, v in enumerate(values):
        plt.text(i, v + 1, f"{v}%", ha='center', color='blue')

def plot_humidity(city_name):
    # Get 3-hour forecast for the city
    forecast = mgr.forecast_at_place(city_name, '3h').forecast
    today = datetime.now().date()
    days, humidity_values = [], []

    for weather in forecast:
        dt = weather.reference_time('date')
        if today < dt.date() <= today + timedelta(days=3):
            if dt.date() not in days:
                days.append(dt.date())
                humidity_values.append(weather.humidity)

    init_plot()
    plt.bar([str(d) for d in days], humidity_values, color='skyblue')
    write_humidity_on_bar_chart(humidity_values)
    plt.show()

# Ask the user for a city and show the chart
city = input("Enter the city name (e.g., Paris,FR): ")
plot_humidity(city)
