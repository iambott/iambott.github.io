function sendMessage() {
    const chatBox = document.getElementById("chat-box");
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return; // Do not send empty messages
    
    displayMessage(chatBox, userInput, 'user');

    // Simulate AI response delay
    setTimeout(() => {
        let aiResponse = getAIResponse(userInput);
        displayMessage(chatBox, aiResponse, 'ai');
    }, 500); // Simulate a slight delay in AI response
    
    document.getElementById("user-input").value = ""; // Clear input field after sending
}

function displayMessage(chatBox, message, sender) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Dummy function to get AI response (replace with your own logic)
function getAIResponse(userInput) {
    // Dummy AI responses
    const responses = new Map([
        ["hi", "Hello!"],
        ["how are you", "I'm good, thank you! How about you?"],
        ["bye", "Goodbye! Talk to you later."],
        ["default", "Sorry, I didn't understand that."]
    ]);

    userInput = userInput.toLowerCase();

    for (let [key, value] of responses) {
        if (userInput.includes(key)) {
            return value;
        }
    }

    return responses.get("default");
}