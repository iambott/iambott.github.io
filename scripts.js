let darkMode = false;

function getUserInput() {
    const userInput = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    return userInput;
}

function handleUserMessage(userInput) {
    displayUserMessage(userInput);
    displayTypingIndicator();
    setTimeout(() => getAndDisplayAIResponse(userInput), 1500);
}

function getAndDisplayAIResponse(userInput) {
    const aiResponse = getAIResponse(userInput);
    hideTypingIndicator();
    displayBotMessage(aiResponse);
}

function sendMessage() {
    const userInput = getUserInput();
    handleUserMessage(userInput);
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function displayUserMessage(message) {
    // Function to display user message
}

function displayBotMessage(message) {
    // Function to display bot message
}

function displayTypingIndicator() {
    // Function to display typing indicator
}

function hideTypingIndicator() {
    // Function to hide typing indicator
}

function getAIResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();
    switch (true) {
        case lowerCaseInput.includes("hi") || lowerCaseInput.includes("hello"):
            return "Hello, how can I assist you?";
        case lowerCaseInput.includes("how are you"):
            return "I'm doing well, thank you for asking!";
        case userInput.match(/what is \d+ [\+\-\*\/] \d+/i):
            try {
                const calculation = userInput.match(/(\d+) ([+\-\*\/]) (\d+)/i);
                const num1 = parseInt(calculation[1]);
                const operator = calculation[2];
                const num2 = parseInt(calculation[3]);
                const result = calculate(num1, num2, operator);
                return result;
            } catch (e) {
                return "Sorry, I couldn't understand that.";
            }
        default:
            return "Sorry, I can't help with that.";
    }
}

function calculate(num1, num2, operator) {
    const operations = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num2 !== 0 ? num1 / num2 : NaN,
    };
    const operation = operations[operator];
    if (!operation) {
        return "Invalid operation.";
    }
    const result = operation(num1, num2);
    return isNaN(result) ? "Invalid operation." : `The result is ${result}.`;
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');
    document.getElementById("mode-toggle").textContent = darkMode ? "Light Mode" : "Dark Mode";
}
