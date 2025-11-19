# Exercises XP Gold

# Exercise 1: Bank Account

# Part I: BankAccount class
class BankAccount:
    def __init__(self, balance=0, username="", password=""):  
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):  
        if self.username == username and self.password == password:  
            self.authenticated = True
        else:
            raise Exception("Authentication failed!")

    def deposit(self, amount):  
        if not self.authenticated:     
            raise Exception("Please login first!")
        if amount <= 0:                 
            raise Exception("Deposit amount must be positive!")
        self.balance += amount

    def withdraw(self, amount):  
        if not self.authenticated:     
            raise Exception("Please login first!")
        if amount <= 0:                 
            raise Exception("Withdraw amount must be positive!")
        self.balance -= amount


# Part II: MinimumBalanceAccount inherits from BankAccount
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, username="", password="", minimum_balance=0):  
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):  
        if not self.authenticated:     
            raise Exception("Please login first!")
        if amount <= 0:                 
            raise Exception("Withdraw amount must be positive!")
        if self.balance - amount < self.minimum_balance:  
            raise Exception("Cannot withdraw beyond minimum balance!")
        self.balance -= amount


# Part IV: BONUS ATM class
class ATM:
    def __init__(self, account_list, try_limit=2):  
        # Part IV: Validate account list and try limit
        if not isinstance(account_list, list):  
            raise Exception("Account list must be a list!")
        for account in account_list:  
            if not isinstance(account, (BankAccount, MinimumBalanceAccount)):  
                raise Exception("All accounts must be BankAccount or MinimumBalanceAccount instances!")
        if try_limit <= 0:  
            raise Exception("Try limit must be positive!")
        
        self.account_list = account_list  
        self.try_limit = try_limit        
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):  
        # Main menu for the ATM simulation
        while True:  
            print("\nATM Main Menu")
            print("1. Log in")
            print("2. Exit")
            choice = input("Select option: ")
            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Exiting ATM. Goodbye!")
                break
            else:
                print("Invalid choice!")

    def log_in(self, username, password):  
        # Login method, tries to authenticate with accounts in the list
        for account in self.account_list:  
            try:
                account.authenticate(username, password)
                print("Login successful!")
                self.show_account_menu(account)
                return
            except Exception as e:
                continue
        self.current_tries += 1
        print(f"Invalid credentials. Attempt {self.current_tries}/{self.try_limit}")
        if self.current_tries >= self.try_limit:  
            print("Maximum login attempts reached. Shutting down.")
            return  # Changed from exit() to return to stop the ATM program gracefully.

    def show_account_menu(self, account):  
        # Account menu after successful login, allowing user to deposit/withdraw
        while True:
            print(f"\nAccount Menu - Balance: {account.balance}")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Select option: ")
            if choice == "1":
                amount = input("Enter deposit amount: ")
                try:
                    amount = int(amount)
                    account.deposit(amount)
                    print(f"Deposited {amount}. New balance: {account.balance}")
                except ValueError:
                    print("Please enter a valid number for deposit amount.")
                except Exception as e:
                    print(e)
            elif choice == "2":
                amount = input("Enter withdraw amount: ")
                try:
                    amount = int(amount)
                    account.withdraw(amount)
                    print(f"Withdrew {amount}. New balance: {account.balance}")
                except ValueError:
                    print("Please enter a valid number for withdraw amount.")
                except Exception as e:
                    print(e)
            elif choice == "3":
                print("Logging out...")
                account.authenticated = False
                break
            else:
                print("Invalid choice!")


# Example Usage: 
# Part I: Create a bank account and a minimum balance account
account1 = BankAccount(1000, "user1", "password1")
account2 = MinimumBalanceAccount(500, "user2", "password2", 100)

# Part IV: Create an ATM object with the accounts and set try limit
atm = ATM([account1, account2], try_limit=3)
