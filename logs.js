$(document).ready(function () {
    const loginLink = $("#login-link");
    const userContainer = $("#user-container");
    const userNameSpan = $("#user-name");
    const loginForm = $("#login-form");
    const loginBtn = $("#login-btn");
    const logoutBtn = $("#logout-btn");
  
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const savedUsername = localStorage.getItem("username");
  
    if (isLoggedIn) {
      showUser(savedUsername);
    } else {
      showLogin();
    }
  
    // Event listener for login button
    loginForm.on("input", "#username", function () {
      const username = $(this).val();
      userNameSpan.text(username);
    });
  
    loginBtn.on("click", function () {
      const username = $("#username").val();
      const password = $("#password").val();
  
      // In a real system, you would perform proper authentication here
      // For simplicity, just check if both fields are filled
      if (username && password) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);
        showUser(username);
  
        // Redirect to the index.html page
        window.location.href = 'index.html';
      }
    });
  
    // Event listener for logout button
    logoutBtn.on("click", function () {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("username");
      showLogin();
    });
  
    function showLogin() {
      loginLink.show();
      userContainer.hide();
    }
  
    function showUser(username) {
      loginLink.hide();
      userContainer.show();
      userNameSpan.text(username);
    }
  });
  