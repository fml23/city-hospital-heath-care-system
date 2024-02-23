<?php
session_start();

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if username and password are provided
    if (!empty($_POST['username']) && !empty($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // You would typically validate the credentials against a database
        // For simplicity, we'll hardcode a username and password here
        $valid_username = 'user';
        $valid_password = 'password';

        if ($username === $valid_username && $password === $valid_password) {
            // Authentication successful, redirect to dashboard or another page
            $_SESSION['username'] = $username;
            header("Location: index.html");
            exit;
        } else {
            $error_message = "Invalid username or password";
        }
    } else {
        $error_message = "Please enter both username and password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login System</title>
  <link rel="stylesheet" href="log.css">
</head>
<body>

<div  class="container">
  <div id="login-container" class="login-container">
    <form action="login.php" id="login-form" class="login-form">
      <h2>Login</h2>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>

      <button type="submit" id="login-btn">Login</button>
    </form>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script src="logs.js"></script>
</body>
</html>
