function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = "";

    // Display user message
    var userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = "You: " + userInput;
    document.getElementById("chat-box").appendChild(userMessage);

    // Get AI response (replace with your own logic)
    var aiResponse = getAIResponse(userInput);

    // Display AI response
    var aiMessage = document.createElement("p");
    aiMessage.classList.add("ai-message");
    aiMessage.textContent = "AI: " + aiResponse;
    document.getElementById("chat-box").appendChild(aiMessage);

    // Scroll to bottom of chat box
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}

// Dummy function to get AI response (replace with your own logic)
function getAIResponse(userInput) {
    // Dummy AI responses
    var responses = {
        "hi": "Hello!",
        "how are you": "I'm doing well, thank you!",
        "bye": "Goodbye!",
        "default": "I'm not sure how to respond to that."
    };

    userInput = userInput.toLowerCase();

    // Check if userInput matches any key in responses
    for (var key in responses) {
        if (userInput.includes(key)) {
            return responses[key];
        }
    }

    // If no match is found, return default response
    return responses["default"];
}
