# Exercise 5: Amount of time left until January 1st

from datetime import datetime

def time_until_new_year():
    now = datetime.now()
    new_year = datetime(now.year + 1, 1, 1, 0, 0, 0)
    time_left = new_year - now

    days = time_left.days
    hours, remainder = divmod(time_left.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    print(f"Time left until January 1st: {days} days, {hours} hours, {minutes} minutes, {seconds} seconds")

time_until_new_year()
