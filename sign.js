document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var phone = document.getElementById("phone").value;
    
    // Here you would typically send this data to a server and store it in a database
    // For demonstration purposes, I'll store it in localStorage
    var user = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        phone: phone
    };
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to index.html
    window.location.href = "index.html";
});
