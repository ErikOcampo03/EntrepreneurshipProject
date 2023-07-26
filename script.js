// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission to server (for demonstration purposes)

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded username and password (for demonstration purposes)
    const validUsername = 'user123';
    const validPassword = 'password123';

    // Check if the entered credentials match the hardcoded ones
    if (username === validUsername && password === validPassword) {
        // Successful login
        alert(`Welcome, ${username}! You are now logged in.`);
        // Redirect to the dashboard or home page here
    } else {
        // Incorrect credentials
        alert('Invalid username or password. Please try again.');
        // Optionally, you can display an error message on the page
    }
}


document.getElementById('loginForm').addEventListener('submit', handleLogin);
