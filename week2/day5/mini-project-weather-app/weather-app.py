# Mini Project: Weather App

# Building a Weather App
from pyowm import OWM
from pyowm.utils import timestamps

API_KEY = "1b989af6596808e82feb16697ea39bd0"  # Replace with your OpenWeatherMap API key
owm = OWM(API_KEY)
mgr = owm.weather_manager()

# Current Weather in Paris 
observation = mgr.weather_at_place("Paris,FR")
w = observation.weather
print("------ Current Weather in Paris ------")
print("Status:", w.detailed_status)
print("Temperature:", w.temperature('celsius')['temp'], "°C")
print("Wind:", w.wind()['speed'], "m/s")
print("Sunrise:", timestamps.to_date(w.sunrise_time()).strftime("%I:%M %p"))
print("Sunset:", timestamps.to_date(w.sunset_time()).strftime("%I:%M %p"))
print("--------------------------------------\n")

# Weather for User Input City 
city_name = input("Enter the city name (e.g., London,UK): ")
observation = mgr.weather_at_place(city_name)
w = observation.weather
print(f"------ Current Weather in {city_name} ------")
print("Status:", w.detailed_status)
print("Temperature:", w.temperature('celsius')['temp'], "°C")
print("Wind:", w.wind()['speed'], "m/s")
print("Sunrise:", timestamps.to_date(w.sunrise_time()).strftime("%I:%M %p"))
print("Sunset:", timestamps.to_date(w.sunset_time()).strftime("%I:%M %p"))
print("--------------------------------------\n")

# 5-Day Forecast (3-hour intervals) 
forecast = mgr.forecast_at_place(city_name, '3h')
print(f"------ 5-Day Forecast for {city_name} (3-hour intervals) ------")
for weather in forecast.forecast:
    time = weather.reference_time('iso')
    status = weather.detailed_status
    temp = weather.temperature('celsius')['temp']
    print(f"{time} | {status} | {temp} °C")
print("--------------------------------------\n")

# Air Pollution 
location = mgr.geocoding_manager().geocode(city_name)
lat = location[0].lat
lon = location[0].lon
air_pollution = mgr.airpollution_manager().air_pollution(lat=lat, lon=lon)
print(f"------ Air Pollution in {city_name} ------")
print(air_pollution)
print("--------------------------------------\n")
