class Phone:
    """
    A class to simulate a mobile phone, with functionality for calls and messages.
    """
    def __init__(self, phone_number):
        """
        Initializes a new Phone object.

        Args:
            phone_number (str): The phone number for this device.
        """
        self.phone_number = phone_number
        # Initialize an empty list to store call history
        self.call_history = []
        # Initialize an empty list to store all sent and received messages
        self.messages = []

    def call(self, other_phone):
        """
        Simulates making a call to another phone.
        Adds a record of the call to this phone's call history.

        Args:
            other_phone (Phone): The Phone object being called.
        """
        call_record = f"Called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)

    def show_call_history(self):
        """
        Prints the entire call history for this phone.
        """
        print(f"\n--- Call History for {self.phone_number} ---")
        if not self.call_history:
            print("No calls have been made.")
        else:
            for record in self.call_history:
                print(record)
        print("---------------------------------")

    def send_message(self, other_phone, content):
        """
        Simulates sending a message to another phone.
        The message is stored in the message list of both the sender and the receiver.

        Args:
            other_phone (Phone): The Phone object receiving the message.
            content (str): The text content of the message.
        """
        message_data = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        # Add the message to both the sender's and receiver's message lists
        self.messages.append(message_data)
        other_phone.messages.append(message_data)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}.")

    def show_outgoing_messages(self):
        """
        Prints all messages sent from this phone.
        """
        print(f"\n--- Outgoing Messages from {self.phone_number} ---")
        # List comprehension to filter for messages where the 'from' key matches this phone's number
        outgoing = [msg for msg in self.messages if msg['from'] == self.phone_number]
        if not outgoing:
            print("No outgoing messages.")
        else:
            for msg in outgoing:
                print(f"To: {msg['to']} | Content: '{msg['content']}'")
        print("-----------------------------------------")

    def show_incoming_messages(self):
        """
        Prints all messages received by this phone.
        """
        print(f"\n--- Incoming Messages for {self.phone_number} ---")
        # List comprehension to filter for messages where the 'to' key matches this phone's number
        incoming = [msg for msg in self.messages if msg['to'] == self.phone_number]
        if not incoming:
            print("No incoming messages.")
        else:
            for msg in incoming:
                print(f"From: {msg['from']} | Content: '{msg['content']}'")
        print("-----------------------------------------")

    def show_messages_from(self, other_phone):
        """
        Prints all messages received by this phone from a specific other phone.

        Args:
            other_phone (Phone): The specific sender Phone object to filter messages from.
        """
        print(f"\n--- Messages from {other_phone.phone_number} to {self.phone_number} ---")
        # List comprehension to filter for messages from the specified sender
        messages_from_sender = [
            msg for msg in self.messages 
            if msg['from'] == other_phone.phone_number and msg['to'] == self.phone_number
        ]
        if not messages_from_sender:
            print(f"No messages from {other_phone.phone_number}.")
        else:
            for msg in messages_from_sender:
                print(f"Content: '{msg['content']}'")
        print("--------------------------------" + "-" * (len(other_phone.phone_number) + len(self.phone_number)))


# --- Test The Code ---

# Create three phone objects
phone1 = Phone("055-555-1111")
phone2 = Phone("055-555-2222")
phone3 = Phone("055-555-3333")

# --- Test Calling ---
print(">>> Testing Calls...")
phone1.call(phone2) # phone1 calls phone2
phone1.call(phone3) # phone1 calls phone3
phone2.call(phone1) # phone2 calls phone1

# Show call history
phone1.show_call_history() # Should show 2 calls
phone2.show_call_history() # Should show 1 call
phone3.show_call_history() # Should be empty

# --- Test Messaging ---
print("\n>>> Testing Messages...")
phone1.send_message(phone2, "Hello, how are you?")
phone2.send_message(phone1, "I'm good, thanks! And you?")
phone1.send_message(phone3, "Hi, let's meet tomorrow.")
phone3.send_message(phone1, "Sure, sounds good.")

# Show outgoing messages
phone1.show_outgoing_messages() # Should show 2 messages
phone2.show_outgoing_messages() # Should show 1 message

# Show incoming messages
phone1.show_incoming_messages() # Should show 2 messages
phone2.show_incoming_messages() # Should show 1 message

# Show messages from a specific number
phone1.show_messages_from(phone2) # Should show 1 message
phone1.show_messages_from(phone3) # Should show 1 message
phone2.show_messages_from(phone1) # Should show 1 message
