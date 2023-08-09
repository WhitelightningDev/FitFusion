document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Replace with your own authentication logic
        if (username === "Daniel" && password === "1234") {


            const authToken = "fakeAuthToken";
            localStorage.setItem("authToken", authToken)

            window.location.href = "index.html";

        } else {
            alert("Invalid credentials. Please try again.");
        }
    });


});


document.addEventListener("DOMContentLoaded", function () {
    const usernameSpan = document.getElementById("user-name");

    // Get the username from local storage and display it
    const storedUsername = localStorage.getItem("username");

    if (storedUsername !== null && storedUsername !== "null") {
        usernameSpan.textContent = storedUsername;
    } else {
        usernameSpan.textContent = "Guest";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector(".back-button-container button.back");
  
    backButton.addEventListener("click", function () {
      // Go back to the previous page
      window.history.back();
    });
  });

  
  document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const menuDropdown = document.getElementById("menu-dropdown");

  menuButton.addEventListener("click", function () {
    menuDropdown.classList.toggle("show");
  });
});
