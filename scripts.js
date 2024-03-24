// Function to handle sending a message
function sendMessage() {
    // Get the user input from the input field
    const userInput = document.getElementById("userInput").value;

    // Display the user message in the chatbox
    displayMessage("user", userInput);

    // Clear the input field
    document.getElementById("userInput").value = "";

    // Simulate AI response after a short delay (for demonstration purposes)
    setTimeout(sendAIResponse, 1500);
}

// Function to display a message in the chatbox
function displayMessage(sender, message) {
    // Create a new message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);

    // Set the text content of the message
    messageElement.textContent = message;

    // Append the message element to the chatbox
    document.getElementById("chatbox").appendChild(messageElement);

    // Scroll to the bottom of the chatbox to show the latest message
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
}

// Function to simulate AI response
function sendAIResponse() {
    // Generate a random AI response for demonstration purposes
    const responses = ["I'm thinking...", "One moment please...", "Let me process that..."];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const aiResponse = responses[randomIndex];

    // Display the AI response in the chatbox
    displayMessage("ai", aiResponse);
}

// Function to handle Enter key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
