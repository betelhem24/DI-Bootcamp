import datetime  # Import module to work with dates

def minutes_lived(birthdate):
    # Convert birthdate string to datetime object
    birth_datetime = datetime.datetime.strptime(birthdate, "%Y-%m-%d")
    
    # Get current date and time
    current_datetime = datetime.datetime.now()
    
    # Calculate time difference
    time_difference = current_datetime - birth_datetime
    
    # Convert difference to minutes
    total_minutes = time_difference.total_seconds() / 60
    
    # Print result
    print(f"You have lived for approximately {int(total_minutes)} minutes.")

# Example usage
minutes_lived("2000-05-15")  # Replace with your birthdate
