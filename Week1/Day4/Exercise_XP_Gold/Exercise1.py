import sys

# --- Part I & III: The Expanded BankAccount Class ---
class BankAccount:

    def __init__(self, initial_balance, username, password):

        self.balance = initial_balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):

        if self.username == username and self.password == password:
            self.authenticated = True
            return True
        return False

    def deposit(self, amount):

        if not self.authenticated:
            raise Exception("Authentication required for deposit.")
        if amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        
        self.balance += amount
        print(f"Deposit successful. New balance: {self.balance}")

    def withdraw(self, amount):

        if not self.authenticated:
            raise Exception("Authentication required for withdrawal.")
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive.")
        if self.balance < amount:
            raise Exception("Insufficient funds.")
            
        self.balance -= amount
        print(f"Withdrawal successful. New balance: {self.balance}")

# --- Part II: The MinimumBalanceAccount Class ---
class MinimumBalanceAccount(BankAccount):

    def __init__(self, initial_balance, username, password, minimum_balance=0):

        super().__init__(initial_balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):

        
        if not self.authenticated:
            raise Exception("Authentication required for withdrawal.")
            
        if (self.balance - amount) < self.minimum_balance:
            raise Exception(f"Withdrawal failed. Balance cannot drop below the minimum of {self.minimum_balance}.")

        super().withdraw(amount)

# --- Part IV: The ATM Class ---
class ATM:

    def __init__(self, account_list, try_limit):

        if not isinstance(account_list, list) or not all(isinstance(acc, BankAccount) for acc in account_list):
            raise TypeError("account_list must be a list of BankAccount instances.")
        self.account_list = account_list


        try:
            if int(try_limit) <= 0:
                raise ValueError
            self.try_limit = int(try_limit)
        except (ValueError, TypeError):
            print("Invalid try_limit provided. Setting to default of 2.")
            self.try_limit = 2
            
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        """Displays the main menu for logging in or exiting."""
        while True:
            print("\n--- Welcome to the ATM ---")
            print("1. Log In")
            print("2. Exit")
            choice = input("Please choose an option: ")

            if choice == '1':
                self.log_in()
            elif choice == '2':
                print("Thank you for using the ATM. Goodbye!")
                sys.exit()
            else:
                print("Invalid option. Please try again.")

    def log_in(self):
        """Handles the user login process."""
        while self.current_tries < self.try_limit:
            username = input("Enter your username: ")
            password = input("Enter your password: ")
            

            for account in self.account_list:
                if account.authenticate(username, password):
                    print(f"Authentication successful for {username}.")
                    self.show_account_menu(account)
                    return 


            self.current_tries += 1
            remaining_tries = self.try_limit - self.current_tries
            print(f"Invalid username or password. You have {remaining_tries} tries remaining.")

        print("\nYou have reached the maximum number of login attempts. The system will now shut down.")
        sys.exit()

    def show_account_menu(self, account):

        while True:
            print(f"\n--- Account Menu for {account.username} ---")
            print(f"Current Balance: {account.balance}")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit to Main Menu")
            choice = input("Please choose an option: ")
            
            try:
                if choice == '1':
                    amount = float(input("Enter amount to deposit: "))
                    account.deposit(amount)
                elif choice == '2':
                    amount = float(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                elif choice == '3':

                    account.authenticated = False
                    print("Logging out...")
                    return 
                else:
                    print("Invalid option. Please try again.")
            except (ValueError, Exception) as e:

                print(f"Error: {e}")


if __name__ == "__main__":

    account1 = BankAccount(1000, "user1", "pass1")
    account2 = MinimumBalanceAccount(5000, "user2", "pass2", minimum_balance=1000)
    account3 = BankAccount(200, "user3", "pass3")
    

    accounts = [account1, account2, account3]

    atm = ATM(accounts, 3)
